import { MouseEventHandler, type ReactNode } from "react";

interface PanelProps {
  id: string;
  children: ReactNode;
  active: string
}
export default function Panel({ children, id, active }: PanelProps) {
  return (
    <div
      className={id === active ? "h-full w-56 flex-shrink border-r border-r-gray-200 bg-white" : "hidden"

      }
    >
      <div className="p-2">{children}</div>
    </div>
  );
}
