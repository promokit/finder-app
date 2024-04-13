import {
    ButtonCalendar,
    ButtonCreateFile,
    ButtonCreateFolder,
    ButtonDelete,
    ButtonRename,
    ButtonShowFolders,
    Separator,
} from '../atoms';

import './Toolbar.css';

export const Toolbar = () => (
    <aside className="toolbar">
        <div className="title">/</div>
        <div className="actions">
            <ButtonDelete />
            <ButtonRename />
            <Separator />
            <ButtonShowFolders />
            <ButtonCalendar />
            <Separator />
            <ButtonCreateFile />
            <ButtonCreateFolder />
        </div>
    </aside>
);
