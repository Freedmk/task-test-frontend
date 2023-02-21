import PanelGroup from '~/components/shared/panelGroup';
import Panel from '~/components/shared/panel';
import DropDown from '~/components/shared/DropDown';
import { useState } from 'react';

export default function Index() {
    const [dropDownSelect, setDropDownSelect] = useState<string | undefined>(undefined);
    const [isSide, setIsSide] = useState("right");
    const title_l = ['Longer Name', 'Second', 'Third'];
    const title_r = ['Rightside Check', 'Second R', 'Third R'];
    const titles = ['Longer Name', 'Second', 'Third'];

    const selectHandler = (value: string, onSide?: string) => {
        setDropDownSelect(value);
        if(onSide){
          setIsSide(onSide);  
        }
        console.log(isSide);
    };
    return (
        <div className="flex h-full w-full flex-col">
            <div className="h-16 flex-shrink border-b border-b-gray-200"></div>
            <div className="h-8 flex-shrink border-b border-b-gray-200"></div>
            <div className="flex h-full flex-grow flex-row">
                <div className="w-56 bg-gray-50 h-full">
                    <PanelGroup key="Left" side="left" options={title_l} selectedOption={dropDownSelect} selectedSide={isSide} active="Longer Name">
                        <Panel key="First" id="Longer Name" active="">
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
                        <Panel key="Second" id="Second" active="">
                            <h2 className="font-bold">Lorem ipsum</h2>
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
                        <Panel key="Third" id="Third" active="">
                            <h2 className="font-bold">Lorem ipsum</h2>
                            <p>This is the third panel on the left side</p>
                        </Panel>
                    </PanelGroup>
                </div>
                <div className="flex-grow bg-gray-50">
                    <div className="relative w-full flex-shrink justify-center space-x-16 lg:max-w-sm">
                        <DropDown onChangeHandler={selectHandler} options={title_r} onSide="right"/>
                    </div>
                </div>
                <div className="w-56 bg-gray-50 h-full">
                    <PanelGroup key="Right" side="right" options={title_r} active="Rightside Check" selectedOption={dropDownSelect} selectedSide={isSide}>
                        <Panel key="First R" id="Rightside Check" active="">
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
                        <Panel key="Second R" id="Second R" active="">
                            <h2 className="font-bold">Lorem ipsum</h2>
                            <p>Lorem ipsum dolor sit amet...</p>
                            <table>
                                <thead>
                                    <tr>
                                        <th>List</th>
                                    </tr>
                                </thead>
                            </table>
                        </Panel>
                        <Panel key="Third R" id="Third R" active="">
                            <h2 className="font-bold">Lorem ipsum</h2>
                            <p>Lorem ipsum dolor sit amet...</p>
                            <table>
                                <tbody>
                                    {[1, 2, 3, 4].map((i) => (
                                        <tr key={i}>
                                            <td>Item {i}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </Panel>
                    </PanelGroup>
                </div>
            </div>
        </div>
    );
}
