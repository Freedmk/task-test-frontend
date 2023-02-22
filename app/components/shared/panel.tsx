import { MouseEventHandler, type ReactNode } from "react";

{/* Panel displays a single Panel
*  id: String that specifies the Panel
*  children: child components of Panel
*  active: String that specifies what the currently active Panel is
*/}
interface PanelProps {
  id: string;
  children: ReactNode;
  active: string
}
export default function Panel({ children, id, active }: PanelProps) {
  return (
    <div
      className={id === active ? "h-full border-r-gray-200 bg-white" : "hidden"

      }
    >
      <div className="p-2">{children}</div>
    </div>
  );
}
