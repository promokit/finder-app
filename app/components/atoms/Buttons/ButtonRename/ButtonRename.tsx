import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Popup } from '~/components';
import { PopupState } from '~/components/Toolbar/Toolbar.types';
import { nodeSignal } from '~/signals/node-signal';
import { NodeType } from '~/types/enums';
import { readNodes } from '~/utils/crud';
import { ButtonRegular } from '..';

export const ButtonRename = () => {
    const [nodeType, setNodeType] = useState<NodeType>(NodeType.File);
    const [popupState, setPopupState] = useState<PopupState>({
        show: false,
        type: nodeType,
    });

    useEffect(() => {
        const node = readNodes(nodeSignal.value);
        if (node.length > 0 && node[0]?.type) {
            setNodeType(node[0].type);
        }
    }, [nodeSignal.value]);

    return (
        nodeSignal.value !== 0 && (
            <>
                <ButtonRegular
                    title="Rename"
                    icon="edit"
                    action={() =>
                        setPopupState({
                            show: true,
                            type: nodeType,
                        })
                    }
                />
                {popupState.show &&
                    createPortal(<Popup onClose={setPopupState} type={popupState.type} />, document.body)}
            </>
        )
    );
};
