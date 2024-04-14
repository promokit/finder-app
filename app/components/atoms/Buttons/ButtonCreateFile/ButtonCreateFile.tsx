import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Popup } from '~/components';
import { PopupState } from '~/components/Toolbar/Toolbar.types';
import { NodeType, PopupPurpose } from '~/types/enums';
import { createNode } from '~/utils';
import { ButtonRegular } from '..';

export const ButtonCreateFile = () => {
    const [popupState, setPopupState] = useState<PopupState>({
        show: false,
    });

    const handleSubmit = (name: string) => {
        createNode({
            name,
            type: NodeType.File,
        });
    };

    return (
        <>
            <ButtonRegular
                title="Create File"
                icon="addfile"
                handleClick={() =>
                    setPopupState({
                        show: true,
                    })
                }
            />
            {popupState.show &&
                createPortal(
                    <Popup
                        title={'Create File'}
                        purpose={PopupPurpose.Create}
                        onClose={setPopupState}
                        onSubmit={handleSubmit}
                    />,
                    document.body
                )}
        </>
    );
};
