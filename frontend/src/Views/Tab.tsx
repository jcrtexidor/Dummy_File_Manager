import { memo, useContext, useState } from "react";
import ListView from "./ListView/list";
import { IFile } from "../@types/global";
import { CurrentFolderContext } from "./contexts";

const Tab = ({ }) => {
    const [current, setCurrent] = useContext(CurrentFolderContext);
    return (<>
        <ListView />
    </>);
}
export default memo(Tab);