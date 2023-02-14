import PanelGroup from '~/components/shared/panelGroup';

export default function Index() {
    return (
        <div className="flex h-full w-full flex-col">
            <div className="h-16 flex-shrink border-b border-b-gray-200"></div>
            <div className="flex-shring h-8 border-b border-b-gray-200"></div>  
            <div className="flex h-full flex-grow flex-row">
          <div className='w-56 bg-gray-50'>
                <PanelGroup side="left" titles={['First', 'Second', 'Third', 'Fourth']} />
            </div>
                <div className="flex-grow bg-gray-50"></div>
                <div className="w-56 flex-shrink border-l border-l-gray-200">{/* <PanelGroup side="right" titles={['Third']} /> */}</div>
            </div>
        </div>
    );
}
