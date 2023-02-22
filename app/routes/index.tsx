import PanelGroup from '~/components/shared/panelGroup';
import Panel from '~/components/shared/panel';
import DropDown from '~/components/shared/DropDown';
import { useState } from 'react';

export default function Index() {
    //These are used to determine what and where a panel should update to when received from a component outside the panelGroup
    const [dropDownSelect, setDropDownSelect] = useState<string | undefined>(undefined);
    const [isSide, setIsSide] = useState('right');
    //These are used for one of the Panels to show clone continues to render current state data
    const [inputText, setInputText] = useState('');
    const [paragraph, setParagraph] = useState('Type a Message to change what I say!');

    //the options for the drop down menus (they are all id's of panels specified by side)
    const title_l = ['Longer Name', 'Second', 'Third'];
    const title_r = ['Rightside Check', 'Second R', 'Third R'];

    //when a selection is made outside of the panelgroup, update states to pass to panel group
    const selectHandler = (value: string, onSide?: string) => {
        setDropDownSelect(value);
        if (onSide) {
            setIsSide(onSide);
        }
    };

    //clear selected so that the state is triggered when called again
    const onClear = () => {
        setDropDownSelect(undefined);
    };

    //for the panel example
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

    return (
        <div className="flex h-full w-full flex-col">
            <div className="h-16 flex-shrink border-b border-b-gray-200"></div>
            <div className="h-8 flex-shrink border-b border-b-gray-200"></div>
            <div className="flex h-full flex-grow flex-row">
                <div className="h-full w-56 bg-gray-50">
                    <PanelGroup
                        key="Left"
                        side="left"
                        options={title_l}
                        selectedOption={dropDownSelect}
                        selectedSide={isSide}
                        active="Longer Name"
                        clearSelected={onClear}
                    >
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
                            <p>{paragraph}</p>
                            <input className="border rounded p-2" type="text" value={inputText} onChange={handleInputChange} />
                            <button
                                className="rounded border border-blue-500 bg-transparent py-2 px-2 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
                                onClick={() => {
                                    setParagraph(inputText); 
                                    setInputText("");
                                }}
                            >
                                Change the Words
                            </button>
                        </Panel>
                    </PanelGroup>
                </div>
                <div className="flex-grow bg-gray-50">
                    <div className="relative w-full flex-shrink justify-center lg:max-w-sm"></div>{' '}
                    <DropDown onChangeHandler={selectHandler} options={title_r} onSide="right" />
                    <button
                        className="rounded border border-blue-500 bg-transparent py-2 px-2 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
                        onClick={() => {
                            setDropDownSelect('Second');
                            setIsSide('left');
                        }}
                    >
                        Set Left Panel to Second
                    </button>
                    <DropDown onChangeHandler={selectHandler} options={title_l} onSide="left" />
                </div>
                <div className="h-full w-56 bg-gray-50">
                    <PanelGroup
                        key="Right"
                        side="right"
                        options={title_r}
                        active="Rightside Check"
                        selectedOption={dropDownSelect}
                        selectedSide={isSide}
                        clearSelected={onClear}
                    >
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
