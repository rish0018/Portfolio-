
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-orb-float-1"></div>
      <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-orb-float-2"></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-blue-300/15 to-purple-300/15 rounded-full blur-2xl animate-orb-float-3"></div>
      
      {/* Animated Lines */}
      <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-blue-500/30 to-transparent animate-line-pulse"></div>
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent animate-line-pulse-horizontal"></div>
      
      {/* Rotating Rings */}
      <div className="absolute top-1/3 right-1/3 w-40 h-40 border border-blue-300/20 rounded-full animate-ring-rotate"></div>
      <div className="absolute bottom-1/3 left-1/4 w-32 h-32 border border-purple-300/20 rounded-full animate-ring-rotate-reverse"></div>
      <div className="absolute top-2/3 right-1/5 w-24 h-24 border border-blue-400/25 rounded-full animate-ring-rotate-slow"></div>
    </div>
  );
};

export default AnimatedBackground;
