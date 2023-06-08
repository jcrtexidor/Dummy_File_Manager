import { createContext, memo, useCallback, useContext, useEffect, useState } from 'react';
import { message } from 'antd';

import ListView from "./ListView/list";
import { IFile, IFileInfo } from '../@types/global';
import { MessageAPIContext, CurrentFolderContext } from './contexts';
import Tab from './Tab';



const Window = ({ }) => {
    const [messageApi, contextHolder] = message.useMessage();
    const [currentFolder, setCurrentFolder] = useState<any>();


    useEffect(() => {
        if (!currentFolder)
            getHome();
    }, []);

    const getHome = useCallback(() => {
        window.electronAPI.getHomeDir()
            .then((home) => setCurrentFolder(home))
            .catch(err => {
                console.error(err);
                messageApi.open({ type: 'error', content: `${err.message}`, });
            })
    }, [])

    return (<>
        {contextHolder}
        <MessageAPIContext.Provider value={{ messageApi }} >
            {
                currentFolder &&
                <CurrentFolderContext.Provider value={{ currentFolder, setCurrentFolder }} >
                    <Tab></Tab>
                </CurrentFolderContext.Provider>
            }
        </MessageAPIContext.Provider>
    </>);
}
export default memo(Window);