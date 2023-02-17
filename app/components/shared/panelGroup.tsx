import { ChangeEventHandler, ReactNode, useState } from "react";
import DropDown from "./DropDown";
import React from "react";

type PanelGroupProps = {
  side: string;
  options: string[];
  children: ReactNode;
  selectedOption?: string;
};

export default function PanelGroup({
  side,
  options,
  children,
  selectedOption,
}: PanelGroupProps) {
  const [isActive, setIsActive] = useState("");
  const [isOpen, setIsOpen] = useState(false);

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

  const handleChange = (value: string) => {
    console.log(value);
    setIsActive(value);
    setIsOpen(true);
  };
  console.log(isActive);

  return (
    <>
      <div className={isOpen ? "flex bg-white" : ""}>
        <DropDown
          onChangeHandler={handleChange}
          options={options}
          selectedOption={selectedOption}
        />
        <svg
          className={isOpen ? "right-10 h-5 bg-white" : "hidden"}
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
      </div>

      <div>
        {!isOpen ? (
          <a
            className={
              isActive === ""
                ? "hidden"
                : `text-black-600 shadow'  absolute top-40 rounded bg-white px-2 py-2 ${
                    side === "left"
                      ? "-left-3 rotate-90"
                      : "-right-4 -rotate-90"
                  }`
            }
            onClick={buttonHandler}
          >
            {isActive}
          </a>
        ) : (
          <div className="h-full">{modifiedChildren}</div>
        )}
      </div>
    </>
  );
}
