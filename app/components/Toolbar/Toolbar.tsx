import { createPortal } from 'react-dom';
import { Button } from '../atoms/Button/Button';

import { useState } from 'react';
import { NodeType } from '~/types/enums';
import { Popup } from '..';
import { PopupState } from './Toolbar.types';

import './Toolbar.css';

export const Toolbar = () => {
    const [popupState, setPopupState] = useState<PopupState>({
        show: true,
        type: NodeType.File,
    });

    return (
        <aside className="toolbar">
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
            {popupState.show &&
                popupState.type &&
                createPortal(<Popup onClose={setPopupState} type={popupState.type} />, document.body)}
        </aside>
    );
};
