import { ChangeEventHandler, ReactNode, useState } from "react";
import DropDown from "./DropDown";
import React from "react";

type PanelGroupProps = {
  side: string;
  options: string[];
  children: ReactNode;
  selectedOption?: string;
  active?: string;
  selectedSide?: string;
  clearSelected: ()=>void;
};

export default function PanelGroup({
  side,
  options,
  children,
  selectedOption,
  active,
  selectedSide,
  clearSelected
}: PanelGroupProps) {
  const [isActive, setIsActive] = useState(active);
  const [isOpen, setIsOpen] = useState(active ? true : false);

  const modifiedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        ...child.props,
        active: isActive,
        children: child.props.children,
      });
    }
    return null;
  });

  const buttonHandler = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (value: string, onSide?: string) => {
    setIsActive(value);
    setIsOpen(true);
    console.log(value);
    clearSelected();
  };

  return (
    <>
      <div
        className={isOpen ? "flex h-12 w-56 bg-white" : "hidden"}
        style={{
          justifyContent: side === "left" ? "flex-start" : `${!isOpen ? "flex-end" : "flex-start"}`,
        }}
      >
        <DropDown
          onChangeHandler={handleChange}
          options={options}
          selectedOption={selectedSide === side ? selectedOption : undefined}
          side={side}
        />
        <svg
          className={isOpen ? "h-6 bg-white" : "hidden"}
          onClick={buttonHandler}
          fill="none"
          stroke="black"
          strokeWidth=".5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style={{
            marginLeft: "auto",
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </div>
      <div className="relative mt-auto h-full flex-grow">
        {!isOpen ? (
          <a
            className={
              isActive === undefined
                ? "hidden"
                : `text-black-600 absolute rounded bg-white px-2 py-2 shadow ${
                    side === "left"
                      ? " rotate-90 origin-bottom-left"
                      : "-right-2 -rotate-90 origin-bottom-right"
                  }`
            }
            onClick={buttonHandler}
          >
            {isActive}
          </a>
        ) : (
          <>{modifiedChildren}</>
        )}
      </div>
    </>
  );
}
