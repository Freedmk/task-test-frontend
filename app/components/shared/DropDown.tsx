import { ChangeEventHandler, useEffect, useState } from "react";

{/* DropDown displays a dropdown menu
*  onChangeHandler: Function called to update the selected dropdown option
*  options: An array of strings that represents the Panel options for the specified side
*  selectedOption?: Optional string to set a value from a component not associated dirrectly with the Panel Group
*  side?: specifies the side of a PanelGroup dropdown for styling purposes
*  onSide?: Optional string sent in if the dropdown affects a panel group but is not directly associated with it to specify which side it should affect
*/}
type DropDownProps = {
  onChangeHandler: (selectedValue: string, selectedSide?: string) => void;
  options: string[];
  selectedOption?: string;
  side?: string;
  onSide?: string
};

export default function DropDown({
  options,
  onChangeHandler,
  selectedOption,
  side,
  onSide
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
    if(onSide){
      onChangeHandler(selectedValue, onSide);
    }else{
      onChangeHandler(selectedValue);
    }
    
  };

  return (
    <div className={`relative lg:max-w-sm ${side === "left" ? "float-left": "float-right"}`}>
      <select
        value={selectedValue}
        onChange={handleChange}
        className="text-black-500 w-max-content appearance-none rounded-md border bg-white p-2.5 shadow-sm outline-none focus:border-indigo-600"
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

