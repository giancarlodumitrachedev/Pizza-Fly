import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface PlaceholderImageProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
  icon?: React.ReactNode;
}

export function PlaceholderImage({ className, text = "Immagine", icon, ...props }: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center bg-slate-200 border-2 border-dashed border-slate-400 text-slate-500 font-semibold w-full h-full min-h-[100px] rounded-xl overflow-hidden",
        className
      )}
      {...props}
    >
      {icon && <div className="mb-2 opacity-50">{icon}</div>}
      <span className="opacity-70 uppercase tracking-wider text-sm">{text}</span>
    </div>
  );
}
