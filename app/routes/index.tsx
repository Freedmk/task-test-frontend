import PanelGroup from '~/components/shared/panelGroup';
import Panel from '~/components/shared/panel';
import { useState } from 'react';

export default function Index() {
  
    const title_l = ['First', 'Second', 'Third'];
    const title_r = ['First R', 'Second R', 'Third R'];
    const [changedState, setChangedState] = useState('First');
    const [changedSide, setChangedSide] = useState('left');

    return (
        <div className="flex h-full w-full flex-col">
            <div className="h-16 flex-shrink border-b border-b-gray-200"></div>
            <div className="flex-shring h-8 border-b border-b-gray-200"></div>
            <div className="flex h-full flex-grow flex-row">
                <div className="flex-shrink bg-gray-50">
                    <PanelGroup key="Left" side="left" options={title_l}>
                        <Panel key="First" id="First" active="">
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
                    <div className="relative w-full flex-shrink justify-center space-x-16 lg:max-w-sm"></div>
                </div>
                <div className="flex-shrink bg-gray-50">
                <PanelGroup key="Left" side="left" options={title_r}>
                        <Panel key="First R" id="First R" active="">
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
