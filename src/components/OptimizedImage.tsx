import { useState, useCallback, memo, ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallback?: string;
  className?: string;
  containerClassName?: string;
  showLoadingState?: boolean;
}

/**
 * OptimizedImage component with:
 * - Native lazy loading
 * - Loading skeleton state
 * - Error fallback handling
 * - Automatic decoding optimization
 */
export const OptimizedImage = memo(function OptimizedImage({
  src,
  alt,
  fallback = "/placeholder.svg",
  className,
  containerClassName,
  showLoadingState = true,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
  }, []);

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {/* Loading skeleton */}
      {showLoadingState && isLoading && !hasError && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      
      <img
        src={hasError ? fallback : src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        {...props}
      />
    </div>
  );
});

/**
 * Preload critical images for better LCP
 */
export function preloadImage(src: string): void {
  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "image";
  link.href = src;
  document.head.appendChild(link);
}

/**
 * Check if native lazy loading is supported
 */
export function supportsLazyLoading(): boolean {
  return "loading" in HTMLImageElement.prototype;
}

