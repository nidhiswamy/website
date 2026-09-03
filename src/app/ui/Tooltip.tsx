"use client";
import { ReactElement, ReactNode, cloneElement, useId, useState } from "react";

type TooltipPosition = "top" | "right" | "bottom" | "left";

interface TooltipProps {
  children: ReactElement;
  content: ReactNode;
  position?: TooltipPosition;
  delay?: number;
  className?: string;
}

const positionClasses: Record<TooltipPosition, string> = {
  top: "bottom-full left-1/2 mb-2 -translate-x-1/2",
  right: "left-full top-1/2 ml-2 -translate-y-1/2",
  bottom: "left-1/2 top-full -translate-x-1/2",
  left: "right-full top-1/2 mr-2 -translate-y-1/2",
};

const arrowClasses: Record<TooltipPosition, string> = {
  top: "left-1/2 top-full -translate-x-1/2 border-x-transparent border-b-transparent border-t-gray-900",
  right:
    "right-full top-1/2 -translate-y-1/2 border-y-transparent border-l-transparent border-r-gray-900",
  bottom:
    "bottom-full left-1/2 -translate-x-1/2 border-x-transparent border-t-transparent border-b-gray-900",
  left: "left-full top-1/2 -translate-y-1/2 border-y-transparent border-r-transparent border-l-gray-900",
};

export default function Tooltip({
  children,
  content,
  position = "top",
  delay = 200,
  className = "",
}: TooltipProps) {
  const tooltipId = useId();
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);

  const showTooltip = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const id = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    setTimeoutId(id);
  };

  const hideTooltip = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }

    setIsVisible(false);
  };

  const trigger = cloneElement(children, {
    "aria-describedby": isVisible ? tooltipId : undefined,
    onMouseEnter: (event: React.MouseEvent) => {
      children.props.onMouseEnter?.(event);
      showTooltip();
    },
    onMouseLeave: (event: React.MouseEvent) => {
      children.props.onMouseLeave?.(event);
      hideTooltip();
    },
    onFocus: (event: React.FocusEvent) => {
      children.props.onFocus?.(event);
      showTooltip();
    },
    onBlur: (event: React.FocusEvent) => {
      children.props.onBlur?.(event);
      hideTooltip();
    },
    onKeyDown: (event: React.KeyboardEvent) => {
      children.props.onKeyDown?.(event);

      if (event.key === "Escape") {
        hideTooltip();
      }
    },
  });

  return (
    <span className="relative inline-flex">
      {trigger}

      <span
        id={tooltipId}
        role="tooltip"
        className={[
          "pointer-events-auto absolute z-50",
          "w-max max-w-xs rounded-md bg-gray-900 px-2.5 py-1.5",
          "text-xs font-medium leading-4 text-white shadow-lg",
          "transition duration-150 ease-out",
          positionClasses[position],
          isVisible
            ? "visible scale-100 opacity-100"
            : "invisible scale-95 opacity-0",
          className,
        ].join(" ")}
      >
        {content}

        <span
          aria-hidden="true"
          className={["absolute h-0 w-0", arrowClasses[position]].join(" ")}
        />
      </span>
    </span>
  );
}
