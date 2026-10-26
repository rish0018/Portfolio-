import { useEffect } from "react";

/** Sets the document title (and optionally the meta description) while the calling page is mounted. */
export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    const previousTitle = document.title;
    const meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta?.getAttribute("content") ?? null;

    document.title = title;
    if (description && meta) meta.setAttribute("content", description);

    return () => {
      document.title = previousTitle;
      if (meta && previousDescription !== null) meta.setAttribute("content", previousDescription);
    };
  }, [title, description]);
}
