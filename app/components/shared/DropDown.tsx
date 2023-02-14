import { ChangeEventHandler, MouseEventHandler } from "react";

type DropDownProps = {
  options: string[];
  handleChange: ChangeEventHandler;
};

export default function DropDown({ options, handleChange}: DropDownProps) {
  return (
      <div className="relative w-full lg:max-w-sm">
          <select onChange={handleChange} className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
              <option >Panel Selection</option>
              {options.map((option)=>
                <option value={option}>{option}</option>
              )}
              
          </select>
      </div>
  );
}