import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { memo } from 'react';

const ToolBar = ({ }) => {
    return (<>
        <Breadcrumb
            items={[
                {
                    href: '',
                    title: <HomeOutlined />,
                },
                {
                    href: '',
                    title: (
                        <>
                            <UserOutlined />
                            <span>Application List</span>
                        </>
                    ),
                },
                {
                    title: 'Application',
                },
            ]}
        />
    </>);
}
export default memo(ToolBar);