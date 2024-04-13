import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Popup } from '~/components';
import { PopupState } from '~/components/Toolbar/Toolbar.types';
import { NodeType } from '~/types/enums';
import { createNode } from '~/utils';
import { ButtonRegular } from '..';

export const ButtonCreateFolder = () => {
    const [popupState, setPopupState] = useState<PopupState>({
        show: false,
    });

    const handleSubmit = (name: string) => {
        createNode({
            name,
            type: NodeType.Dir,
        });
    };

    return (
        <>
            <ButtonRegular
                title="Create Folder"
                icon="addfolder"
                handleClick={() =>
                    setPopupState({
                        show: true,
                    })
                }
            />
            {popupState.show &&
                createPortal(
                    <Popup title={'Create Folder'} onClose={setPopupState} onSubmit={handleSubmit} />,
                    document.body
                )}
        </>
    );
};
