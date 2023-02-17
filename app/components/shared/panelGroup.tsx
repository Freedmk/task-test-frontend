import { ReactNode, useState } from "react";
import DropDown from "./DropDown";
import React from "react";

type PanelGroupProps = {
  side: string;
  options: string[];
  children: ReactNode;
};

export default function PanelGroup({
  side,
  options,
  children,
}: PanelGroupProps) {
  const [isActive, setIsActive] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const modifiedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        ...child.props,
        active: isActive,
        children:child.props.children,
      });
    }
    return null;
  });

  console.log(modifiedChildren);
  const buttonHandler = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setIsActive(event.target.value);
    setIsOpen(true);
  };
  return (
    <>
      <DropDown handleChange={handleChange} options={options}/>
      <div>
        {!isOpen ? (
          <a
            className={isActive === "" ? "hidden" : `absolute top-40  px-2 py-2 text-black-600 bg-white rounded shadow' ${side === "left" ? '-left-3 rotate-90'  : '-right-3 -rotate-90' }`}
            onClick={buttonHandler}
          >
            {isActive}
          </a>
        ) : (
          <>
            <svg
              className="float-right h-8"
              onClick={buttonHandler}
              fill="none"
              stroke="black"
              strokeWidth=".5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
            <div className="h-full">{modifiedChildren}</div>
          </>
        )}
      </div>
    </>
  );
}
