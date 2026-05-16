"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from './PlaceholderImage';

interface SmartImageProps {
  /** Path relative to /public, e.g. "hero.jpg" */
  src: string;
  alt: string;
  /** Fallback text shown when image is missing */
  fallbackText?: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  unoptimized?: boolean;
  sizes?: string;
}

/**
 * SmartImage: tries to load an image from /public.
 * If it fails (404), falls back to a styled placeholder.
 * 
 * IMAGE NAMING GUIDE — just drag & drop these into /public:
 * 
 *   hero.jpg              → Hero section main image
 *   feature-01.jpg        → Feature section #1
 *   feature-02.jpg        → Feature section #2
 *   feature-03.jpg        → Feature section #3
 *   events.jpg            → Special Events banner
 *   delivery-1.jpg        → Glovo delivery photo 1
 *   delivery-2.jpg        → Glovo delivery photo 2
 *   delivery-3.jpg        → Glovo delivery photo 3
 *   gallery/01.jpg        → Gallery photo 1
 *   gallery/02.jpg        → Gallery photo 2
 *   ...                   → (up to gallery/12.jpg)
 */
export function SmartImage({ 
  src, 
  alt, 
  fallbackText, 
  className, 
  fill = true, 
  width, 
  height,
  priority = false,
  unoptimized = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: SmartImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center bg-slate-200 border-2 border-dashed border-slate-400 text-slate-500 font-semibold w-full h-full min-h-[100px] rounded-xl overflow-hidden",
          className
        )}
      >
        <span className="opacity-70 uppercase tracking-wider text-sm text-center px-4">
          {fallbackText || alt}
        </span>
      </div>
    );
  }

  const imgSrc = src.startsWith('/') ? src : `/${src}`;

  if (fill) {
    return (
      <Image
        src={imgSrc}
        alt={alt}
        fill
        className={cn("object-cover", className)}
        onError={() => setHasError(true)}
        priority={priority}
        sizes={sizes}
        unoptimized={unoptimized}
      />
    );
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width || 600}
      height={height || 400}
      className={cn("object-cover", className)}
      onError={() => setHasError(true)}
      priority={priority}
      unoptimized={unoptimized}
    />
  );
}
