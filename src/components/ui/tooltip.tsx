import { ReactNode } from "react";

export const TooltipBubble = ({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) => {
  return (
    <div className="relative group inline-block">
      {/* Target */}
      {children}

      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                      opacity-0 group-hover:opacity-100 transition-all duration-200
                      whitespace-nowrap px-3 py-1 rounded-md bg-white text-black text-sm font-medium shadow
                      dark:bg-neutral-800 dark:text-white dark:shadow-lg">
        {label}

        {/* Tail */}
        <div className="absolute left-1/2  -translate-x-1/2 w-2  h-2
                        bg-white rotate-45 dark:bg-neutral-800 shadow-sm">
        </div>
      </div>
    </div>
  );
};