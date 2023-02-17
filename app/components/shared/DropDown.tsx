import { ChangeEventHandler, useEffect, useState } from "react";

type DropDownProps = {
  onChangeHandler: (selectedValue: string) => void;
  options: string[];
  selectedOption?: string;
};

export default function DropDown({
  options,
  onChangeHandler,
  selectedOption,
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
    <div className="relative w-24 flex-shrink lg:max-w-sm">
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
