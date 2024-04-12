import { useState } from 'react';
import { createPortal } from 'react-dom';
import { NodeType } from '~/types/enums';
import { Popup } from '..';
import { Button, ButtonDelete, ButtonRename } from '../atoms';
import { PopupState } from './Toolbar.types';

import './Toolbar.css';

export const Toolbar = () => {
    const [popupState, setPopupState] = useState<PopupState>({
        show: false,
        type: NodeType.File,
    });

    return (
        <aside className="toolbar">
            <div className="title">Root</div>
            <div className="actions">
                <ButtonDelete />
                <ButtonRename />
                <Button
                    title="Create File"
                    icon="addfile"
                    action={() => setPopupState({ show: true, type: NodeType.File })}
                />
                <Button
                    title="Create Folder"
                    icon="addfolder"
                    action={() => setPopupState({ show: true, type: NodeType.Dir })}
                />
            </div>
            {popupState.show &&
                popupState.type &&
                createPortal(<Popup onClose={setPopupState} type={popupState.type} />, document.body)}
        </aside>
    );
};
