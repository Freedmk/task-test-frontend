import { ChangeEventHandler, MouseEventHandler } from "react";

type DropDownProps = {
  handleChange: ChangeEventHandler;
  options: string[];
};

export default function DropDown({options, handleChange}: DropDownProps) {
  return (
      <div className="relative w-full lg:max-w-sm flex-shrink">
          <select onChange={handleChange} className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
            {options.map((option) =>
            <option key={option} value={option}>{option}</option>
            )}
          </select>
      </div>
  );
}
