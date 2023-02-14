import { MouseEventHandler, type ReactNode } from "react";

interface PanelProps {
  id: string;
  title: string;
  buttonHandler: MouseEventHandler;
  children: ReactNode;
  state: string;
}
export default function Panel({ title, children, buttonHandler, state }: PanelProps) {
  return (
    <div className={state === title ? "w-56 h-full flex-shrink bg-white border-r border-r-gray-200": "hidden"}>
      <div className={"bg-gray-50 flex h-8 flex-row items-center border-b border-b-gray-200 px-2 text-lg "}>
        {title}
        <button onClick={buttonHandler} className="right-8 flex text-black">
          X
        </button>
      </div>
      <div className="p-2">{children}</div>
    </div>
  );
}
