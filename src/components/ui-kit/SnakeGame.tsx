import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { cn } from "../../lib/utils";

export type SnakeStatus = "idle" | "playing" | "paused" | "over";

interface SnakeGameProps {
  /** Fired when a new round begins (from idle or after game over). */
  onStart?: () => void;
  /** Fired each time an apple is eaten, with the new score. */
  onEat?: (score: number) => void;
  /** Fired when the round ends, with the final score. */
  onGameOver?: (score: number) => void;
  className?: string;
}

interface Point {
  x: number;
  y: number;
}

interface Engine {
  start: () => void;
  pause: () => void;
  resume: () => void;
  turn: (d: Point) => void;
  getState: () => SnakeStatus;
}

const GRID = 16;
const CELL = 25;
const SIZE = GRID * CELL;
const BASE_MS = 140;
const MIN_MS = 70;
const STEP_MS = 4;
const SWIPE_PX = 24;

const UP = { x: 0, y: -1 };
const DOWN = { x: 0, y: 1 };
const LEFT = { x: -1, y: 0 };
const RIGHT = { x: 1, y: 0 };

const KEYMAP: Record<string, Point> = {
  ArrowUp: UP,
  ArrowDown: DOWN,
  ArrowLeft: LEFT,
  ArrowRight: RIGHT,
  w: UP,
  W: UP,
  s: DOWN,
  S: DOWN,
  a: LEFT,
  A: LEFT,
  d: RIGHT,
  D: RIGHT,
};

const COLORS = {
  bg: "#0f1411",
  grid: "#171d19",
  snake: "#5fa89c",
  head: "#8ab8ae",
  apple: "#e8823c",
};

interface Game {
  snake: Point[];
  dir: Point;
  queue: Point[];
  apple: Point;
  score: number;
}

const same = (a: Point, b: Point) => a.x === b.x && a.y === b.y;

function spawnApple(snake: Point[]): Point {
  const free: Point[] = [];
  for (let x = 0; x < GRID; x++) {
    for (let y = 0; y < GRID; y++) {
      if (!snake.some((s) => s.x === x && s.y === y)) free.push({ x, y });
    }
  }
  return free[Math.floor(Math.random() * free.length)] ?? { x: 0, y: 0 };
}

function newGame(): Game {
  const snake = [
    { x: 8, y: 8 },
    { x: 7, y: 8 },
    { x: 6, y: 8 },
  ];
  return { snake, dir: RIGHT, queue: [], apple: spawnApple(snake), score: 0 };
}

const intervalFor = (score: number) => Math.max(MIN_MS, BASE_MS - score * STEP_MS);

export function SnakeGame({ onStart, onEat, onGameOver, className }: SnakeGameProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<Engine | null>(null);
  const swipeRef = useRef<Point | null>(null);
  const cbRef = useRef({ onStart, onEat, onGameOver });
  const [status, setStatus] = useState<SnakeStatus>("idle");
  const [finalScore, setFinalScore] = useState(0);

  useEffect(() => {
    cbRef.current = { onStart, onEat, onGameOver };
  }, [onStart, onEat, onGameOver]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !wrap || !ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = SIZE * dpr;
    canvas.height = SIZE * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    let game = newGame();
    let state: SnakeStatus = "idle";
    let timer: number | undefined;

    const setState = (s: SnakeStatus) => {
      state = s;
      setStatus(s);
    };

    const cell = (p: Point, color: string, inset = 2) => {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.roundRect(p.x * CELL + inset, p.y * CELL + inset, CELL - inset * 2, CELL - inset * 2, 5);
      ctx.fill();
    };

    const draw = () => {
      ctx.fillStyle = COLORS.bg;
      ctx.fillRect(0, 0, SIZE, SIZE);
      ctx.fillStyle = COLORS.grid;
      for (let i = 1; i < GRID; i++) {
        ctx.fillRect(i * CELL, 0, 1, SIZE);
        ctx.fillRect(0, i * CELL, SIZE, 1);
      }
      cell(game.apple, COLORS.apple, 4);
      game.snake.forEach((p, i) => cell(p, i === 0 ? COLORS.head : COLORS.snake));
    };

    const clear = () => {
      if (timer !== undefined) {
        window.clearTimeout(timer);
        timer = undefined;
      }
    };

    const end = () => {
      clear();
      setFinalScore(game.score);
      setState("over");
      cbRef.current.onGameOver?.(game.score);
    };

    const tick = () => {
      const next = game.queue.shift();
      if (next) game.dir = next;

      const head = { x: game.snake[0].x + game.dir.x, y: game.snake[0].y + game.dir.y };
      const eating = same(head, game.apple);
      const body = eating ? game.snake : game.snake.slice(0, -1);
      const hitWall = head.x < 0 || head.y < 0 || head.x >= GRID || head.y >= GRID;

      if (hitWall || body.some((s) => same(s, head))) {
        draw();
        end();
        return;
      }

      game.snake.unshift(head);
      if (eating) {
        game.score += 1;
        cbRef.current.onEat?.(game.score);
        if (game.snake.length >= GRID * GRID) {
          draw();
          end();
          return;
        }
        game.apple = spawnApple(game.snake);
      } else {
        game.snake.pop();
      }

      draw();
      timer = window.setTimeout(tick, intervalFor(game.score));
    };

    const start = () => {
      clear();
      game = newGame();
      cbRef.current.onStart?.();
      setState("playing");
      draw();
      timer = window.setTimeout(tick, intervalFor(0));
    };

    const pause = () => {
      if (state !== "playing") return;
      clear();
      setState("paused");
    };

    const resume = () => {
      if (state !== "paused") return;
      setState("playing");
      timer = window.setTimeout(tick, intervalFor(game.score));
    };

    const turn = (d: Point) => {
      if (state !== "playing") return;
      const last = game.queue[game.queue.length - 1] ?? game.dir;
      const reversing = last.x + d.x === 0 && last.y + d.y === 0;
      if (reversing || same(last, d) || game.queue.length >= 2) return;
      game.queue.push(d);
    };

    engineRef.current = { start, pause, resume, turn, getState: () => state };
    draw();

    const onVisibility = () => {
      if (document.hidden) pause();
    };
    document.addEventListener("visibilitychange", onVisibility);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.3) pause();
      },
      { threshold: [0, 0.3] }
    );
    observer.observe(wrap);

    return () => {
      clear();
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      engineRef.current = null;
    };
  }, []);

  const activate = () => {
    const engine = engineRef.current;
    if (!engine) return;
    const s = engine.getState();
    if (s === "idle" || s === "over") engine.start();
    else if (s === "paused") engine.resume();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const engine = engineRef.current;
    if (!engine) return;
    const dir = KEYMAP[e.key];
    if (dir) {
      if (engine.getState() === "playing") {
        e.preventDefault();
        engine.turn(dir);
      }
      return;
    }
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      activate();
    } else if (e.key === "Escape") {
      engine.pause();
    }
  };

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    wrapRef.current?.focus();
    const engine = engineRef.current;
    if (!engine) return;
    if (engine.getState() !== "playing") {
      activate();
      return;
    }
    if (e.pointerType !== "mouse") swipeRef.current = { x: e.clientX, y: e.clientY };
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const start = swipeRef.current;
    const engine = engineRef.current;
    if (!start || !engine) return;
    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;
    if (Math.max(Math.abs(dx), Math.abs(dy)) < SWIPE_PX) return;
    engine.turn(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? RIGHT : LEFT) : dy > 0 ? DOWN : UP);
    swipeRef.current = { x: e.clientX, y: e.clientY };
  };

  const endSwipe = () => {
    swipeRef.current = null;
  };

  return (
    <div
      ref={wrapRef}
      tabIndex={0}
      role="application"
      aria-label="Snake game. Press Enter to start, then use arrow keys or WASD. Swipe on touch screens."
      onKeyDown={onKeyDown}
      onBlur={() => engineRef.current?.pause()}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endSwipe}
      onPointerCancel={endSwipe}
      style={{ touchAction: status === "playing" ? "none" : "pan-y" }}
      className={cn(
        "cursor-target relative aspect-square w-full select-none overflow-hidden rounded-xl border border-ink-600 outline-none focus-visible:border-mint-400",
        className
      )}
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
      {status !== "playing" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-ink-950/75 p-4 text-center">
          <p className="font-display text-lg font-semibold text-paper">
            {status === "idle" && "Play snake"}
            {status === "paused" && "Paused"}
            {status === "over" && `Game over · ${finalScore}`}
          </p>
          <p className="font-mono text-xs text-sand">
            {status === "paused" ? "Click or press Enter to resume" : "Click, tap or press Enter"}
          </p>
        </div>
      )}
    </div>
  );
}
