"use client"

import React, { useRef, useImperativeHandle } from "react";
import styles from "./ShinyButton.module.css";

export type ShinyButtonSize = "sm" | "md" | "lg";
export type ShinyButtonColor = "midnight" | "rose" | "teal" | "gold";

export interface ShinyButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  size?: ShinyButtonSize;
  color?: ShinyButtonColor;
}

/**
 * Pure-CSS shiny button (no webcam). Gradient rim, animated sheen, sparkles,
 * and subtle mouse-parallax via CSS custom props.
 */
const ShinyButton = React.forwardRef<HTMLButtonElement, ShinyButtonProps>(
  (
    {
      children = "Shiny Button",
      size = "md",
      color = "midnight",
      className,
      onMouseMove,
      onMouseLeave,
      onTouchStart,
      ...buttonProps
    },
    ref
  ) => {
    const localRef = useRef<HTMLButtonElement | null>(null);

    useImperativeHandle(ref, () => localRef.current as HTMLButtonElement);

    function handleMove(e: React.MouseEvent<HTMLButtonElement>) {
      // allow caller's handler first (if they stopPropagation/preventDefault)
      onMouseMove?.(e);
      if (e.isPropagationStopped()) return;

      const el = localRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width; // 0..1
      const y = (e.clientY - rect.top) / rect.height; // 0..1
      el.style.setProperty("--mx", x.toFixed(4));
      el.style.setProperty("--my", y.toFixed(4));
    }

    function handleLeave(e: React.MouseEvent<HTMLButtonElement>) {
      onMouseLeave?.(e);
      if (e.isPropagationStopped()) return;

      const el = localRef.current;
      if (!el) return;
      el.style.removeProperty("--mx");
      el.style.removeProperty("--my");
    }

    function handleTouchStart(e: React.TouchEvent<HTMLButtonElement>) {
      onTouchStart?.(e);
      if (e.isPropagationStopped()) return;

      // avoid sticky parallax on touch
      const el = localRef.current;
      if (!el) return;
      el.style.removeProperty("--mx");
      el.style.removeProperty("--my");
    }

    const cls = [
      styles.shiny,
      styles[size],
      styles[color],
      className ?? "",
    ].join(" ");

    return (
      <button
        ref={localRef}
        className={cls}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        onTouchStart={handleTouchStart}
        {...buttonProps}
      >
        <span className={styles.label}>{children}</span>
        <i className={styles.base} aria-hidden="true" />
        <i className={styles.rim} aria-hidden="true" />
        <i className={styles.sheen} aria-hidden="true" />
        <i className={styles.highlights} aria-hidden="true" />
        <i className={styles.sparkles} aria-hidden="true" />
      </button>
    );
  }
);

ShinyButton.displayName = "ShinyButton";
export default ShinyButton;
