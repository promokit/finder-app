import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Popup } from '~/components';
import { PopupState } from '~/components/Toolbar/Toolbar.types';
import { nodeSignal } from '~/signals';
import { PopupPurpose } from '~/types/enums';
import { updateNode } from '~/utils';
import { ButtonRegular } from '..';

export const ButtonRename = () => {
    const [popupState, setPopupState] = useState<PopupState>({
        show: false,
    });

    const handleSubmit = (name: string) => {
        updateNode({ id: nodeSignal.value, name });
    };

    return (
        nodeSignal.value !== '' && (
            <>
                <ButtonRegular
                    title="Rename"
                    icon="edit"
                    extraClass="rename"
                    handleClick={() =>
                        setPopupState({
                            show: true,
                        })
                    }
                />
                {popupState.show &&
                    createPortal(
                        <Popup
                            title={`Rename`}
                            purpose={PopupPurpose.Rename}
                            onClose={setPopupState}
                            onSubmit={handleSubmit}
                        />,
                        document.body
                    )}
            </>
        )
    );
};
