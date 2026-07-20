import { useEffect, useRef } from "react";

interface InfiniteScrollSentinelProps {
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;
  onLoadMore: () => void;
  className?: string;
}

export function InfiniteScrollSentinel({
  hasNextPage,
  isFetchingNextPage,
  onLoadMore,
  className = "",
}: InfiniteScrollSentinelProps) {
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hasNextPage || isFetchingNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onLoadMore();
        }
      },
      { threshold: 0.1, rootMargin: "250px" }
    );

    const el = sentinelRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [hasNextPage, isFetchingNextPage, onLoadMore]);

  if (!hasNextPage) return null;

  return (
    <div ref={sentinelRef} className={`py-6 flex justify-center items-center w-full ${className}`}>
      {isFetchingNextPage ? (
        <div className="flex items-center gap-2.5 text-xs font-semibold text-[#20A854] bg-[#20A854]/10 px-4 py-2 rounded-full border border-[#20A854]/20 animate-pulse">
          <span className="h-4 w-4 rounded-full border-2 border-[#20A854] border-t-transparent animate-spin" />
          Loading more items...
        </div>
      ) : (
        <div className="h-4 w-full" />
      )}
    </div>
  );
}
