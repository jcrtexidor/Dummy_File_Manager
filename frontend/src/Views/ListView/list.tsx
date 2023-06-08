import { memo, useContext, useEffect, useState } from "react";
import { IFile, IFileInfo } from "../../@types/global";
import { MessageInstance } from "antd/es/message/interface";

import { List, Space } from 'antd';
import {
    FileGifOutlined,
    FileImageOutlined,
    FileJpgOutlined,
    FileMarkdownOutlined,
    FileOutlined,
    FilePdfOutlined,
    FilePptOutlined,
    FileTextOutlined,
    FileUnknownOutlined,
    FileWordOutlined,
    FileZipOutlined,
    FolderOutlined,
    LinkOutlined
} from "@ant-design/icons";
import { CurrentFolderContext, MessageAPIContext } from "../contexts";


const ListView = () => {

    const [files, setFiles] = useState<IFile[]>([]);
    const [parent, setParent] = useState<IFileInfo>();
    const { currentFolder, setCurrentFolder } = useContext(CurrentFolderContext);
    const { messageApi } = useContext(MessageAPIContext);

    useEffect(() => { console.log(parent, currentFolder, messageApi) })

    useEffect(() => {
        getFiles(currentFolder);
    }, [])


    const getFiles = (directory: IFile) => {
        window.electronAPI.getFiles(directory.path)
            .then((files) => {
                setFiles(files);
                getCurrent(directory)
                getParent(directory);
            })
            .catch(err => {
                console.error(err)
                messageApi.open({ type: 'error', content: `${err.message}`, });
            })
    };



    const getCurrent = (current: IFile) => {
        window.electronAPI.getFile(current.path)
            .then((folder) => { setCurrentFolder(folder); })
            .catch(err => {
                console.error(err);
                messageApi.open({ type: 'error', content: `${err.message}`, });
            })
    };

    const getParent = (current: IFile) => {
        window.electronAPI.getParent(current.path)
            .then((folder) => { setParent(folder); })
            .catch(err => {
                console.error(err);
                messageApi.open({ type: 'error', content: `${err.message}`, });
            })
    };




    const getAvatar = (file: IFile) => {
        const iconStyle = { fontSize: "24px" };

        if (file.isDirectory)
            return <FolderOutlined style={iconStyle} />
        if (file.isSymbolicLink)
            return <LinkOutlined style={iconStyle} />
        if (file.extension === '')
            return <FileOutlined style={iconStyle} />
        if (file.extension === '.gif')
            return <FileGifOutlined style={iconStyle} />
        if (file.extension === '.png')
            return <FileImageOutlined style={iconStyle} />
        if (file.extension === '.jpg')
            return <FileJpgOutlined style={iconStyle} />
        if (file.extension === '.md' || file.extension === '.markdown')
            return <FileMarkdownOutlined style={iconStyle} />
        if (file.extension === '.pdf')
            return <FilePdfOutlined style={iconStyle} />
        if (file.extension === '.ppt')
            return <FilePptOutlined style={iconStyle} />
        if (file.extension === '.txt')
            return <FileTextOutlined style={iconStyle} />
        if (file.extension === '.doc')
            return <FileWordOutlined style={iconStyle} />
        if (file.extension === '.zip')
            return <FileZipOutlined style={iconStyle} />
        return <FileUnknownOutlined style={iconStyle} />
    }


    return (<>

        <List
            dataSource={files}
            header={<> {
                parent &&
                <List.Item>
                    <List.Item.Meta
                        avatar={<></>}
                        title={
                            <a onDoubleClick={() => getFiles(parent)} style={{ userSelect: "none", cursor: "default" }}>
                                <Space>
                                    {<FolderOutlined style={{ fontSize: "24px" }} />}
                                    {parent.name}
                                </Space>
                            </a>
                        }
                        description={undefined}
                    />
                </List.Item>
            }</>}
            footer={<></>}
            renderItem={
                file =>
                    <List.Item>
                        <List.Item.Meta
                            avatar={<></>}
                            title={
                                <a onDoubleClick={() => getFiles(file)} style={{ userSelect: "none", cursor: "default" }}>
                                    <Space>
                                        {getAvatar(file)}
                                        {file.name}
                                    </Space>
                                </a>
                            }
                            description={undefined}
                        />
                    </List.Item>
            }
        >

        </List>
    </>)
}

export default memo(ListView);