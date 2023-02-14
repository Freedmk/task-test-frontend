import { ChangeEventHandler, SetStateAction, useState } from "react";
import Panel from "./panel";
import DropDown from "./DropDown";

type PanelGroupProps = {
  titles: string[];
  side: string;
};

export default function PanelGroup({ titles, side }: PanelGroupProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isActive, setIsActive] = useState("");
    const buttonHandler = () => {
        setIsOpen(!isOpen)
    }
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setIsActive(event.target.value);
        setIsOpen(true);
    }
  return (
    <>
    <DropDown options={titles} handleChange={handleChange}/>
    

        {titles.map((title) =>  
        <>       
        {!isOpen ?
        (<a
            onClick={buttonHandler}
            className={isActive === "" ? "hidden" : "fixed rotatepx-10 py-4 text-black-600 bg-white rounded shadow ease-in-out duration-300"}
          >{isActive}
        </a>) :
        (<Panel id={title} title={title} buttonHandler={buttonHandler} state={isActive}>     
          <h2 className="font-bold">Lorem ipsum</h2>
          <p>Lorem ipsum dolor sit amet...</p>
          <table>
            <thead>
              <tr>
                <th>List</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4].map((i) => (
                <tr key={i}>
                  <td>Item {i}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Panel>
        )}</>
    )
    }
    </>
  );
}


// export default function PanelGroup({ titles, side }: PanelGroupProps) {
//     const [isOpen, setIsOpen] = useState(false);
//     const [isActive, setIsActive] = useState(""); 
//     const buttonHandler = () => {
//         setIsOpen(!isOpen)
//     }
//     const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//         setIsActive(event.target.value);
//     }
//   return (
//     <>
//     <DropDown options={titles} handleChange={handleChange}/>     
//         {!isOpen ?
//         (<a
//             onClick={buttonHandler}
//             className="fixed px-10 py-4 text-black-600 bg-white rounded shadow rotate-90"
//           >{isActive}
//         </a>) :
//         (<Panel id={isActive} title={isActive} buttonHandler={buttonHandler}>     
//           <h2 className="font-bold">Lorem ipsum</h2>
//           <p>Lorem ipsum dolor sit amet...</p>
//           <table>
//             <thead>
//               <tr>
//                 <th>List</th>
//               </tr>
//             </thead>
//             <tbody>
//               {[1, 2, 3, 4].map((i) => (
//                 <tr key={i}>
//                   <td>Item {i}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </Panel>
//         )}
//     </>
//   );
// }