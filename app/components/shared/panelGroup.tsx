import { ChangeEventHandler, ReactNode, useState } from "react";
import Panel from "./panel";
import DropDown from "~/components/shared/DropDown";
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
      <DropDown handleChange={handleChange} options={options} />
      <div>
        {!isOpen ? (
          <div
            className="absolute transform border-r-gray-200 bg-white px-2"
            onClick={buttonHandler}
          >
            {isActive}
          </div>
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
            <div>{modifiedChildren}</div>
          </>
        )}
      </div>
    </>
  );
}
