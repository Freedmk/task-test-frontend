import { ChangeEventHandler, useEffect, useState } from "react";

type DropDownProps = {
  onChangeHandler: (selectedValue: string) => void;
  options: string[];
  selectedOption?: string;
  side?: string;
};

export default function DropDown({
  options,
  onChangeHandler,
  selectedOption,
  side
}: DropDownProps) {
  const [selectedValue, setSelectedValue] = useState(selectedOption || "");

  useEffect(() => {
    if (selectedOption && selectedOption !== selectedValue) {
      setSelectedValue(selectedOption);
      onChangeHandler(selectedOption);
    }
  }, [selectedOption]);

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const selectedValue = event.target.value;
    setSelectedValue(selectedValue);
    onChangeHandler(selectedValue);
  };

  return (
    <div className={`relative lg:max-w-sm w-28 ${side === "left" ? "float-left": "float-right"}`}>
      <select
        value={selectedValue}
        onChange={handleChange}
        className="text-black-500 w-full appearance-none rounded-md border bg-white p-2.5 shadow-sm outline-none focus:border-indigo-600"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

{/* <div className={`relative lg:max-w-sm w-18 ${side === "left" ? "float-left": "float-right"}`}> */}
