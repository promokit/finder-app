import { FormEvent, useLayoutEffect, useState } from 'react';
import { ButtonRegular } from '~/components';
import { nodeSignal } from '~/signals';
import { Node } from '~/types';
import { PopupPurpose } from '~/types/enums';
import { readNodes } from '~/utils';
import type { PopupState } from '../Toolbar/Toolbar.types';

import './Popup.css';

type Props = {
    title: string;
    purpose: PopupPurpose;
    onClose: ({ show }: PopupState) => void;
    onSubmit: (name: string) => void;
};

export const Popup = ({ title, purpose, onClose, onSubmit }: Props) => {
    const [nodeName, setNodeName] = useState('');

    const hidePopup = () => onClose({ show: false });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNodeName(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(nodeName);
        hidePopup();
    };

    useLayoutEffect(() => {
        if (purpose !== PopupPurpose.Rename) {
            return;
        }
        const node: Node[] = readNodes(nodeSignal.value);
        if (node?.length > 0 && node[0]?.name) {
            setNodeName(node[0].name);
        }
    }, [nodeSignal.value]);

    return (
        <div className="popup window-style">
            <header>
                <div>{title}</div>
                <ButtonRegular title="Close Popup" icon="plus" handleClick={hidePopup} />
            </header>
            <div className="popup-body">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="nodename"
                        value={nodeName}
                        onChange={handleChange}
                        placeholder={'Name'}
                        autoFocus
                    />
                    <button className="button" type="submit">
                        {purpose === PopupPurpose.Rename ? 'Rename' : 'Create'}
                    </button>
                </form>
            </div>
        </div>
    );
};
