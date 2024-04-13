import { FormEvent, useLayoutEffect, useState } from 'react';
import type { PopupState } from '../Toolbar/Toolbar.types';
import { ButtonRegular } from '../atoms';

import { nodeSignal } from '~/signals';
import { Node } from '~/types';
import { readNodes } from '~/utils';
import './Popup.css';

type Props = {
    title: string;
    onClose: ({ show }: PopupState) => void;
    onSubmit: (name: string) => void;
};

export const Popup = ({ title, onClose, onSubmit }: Props) => {
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
        const node: Node[] = readNodes(nodeSignal.value);
        if (node.length > 0 && node[0]?.name) {
            setNodeName(node[0].name);
        }
    }, [nodeSignal.value]);

    return (
        <div className="popup window-view">
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
                    />
                    <button className="button" type="submit">
                        Create
                    </button>
                </form>
            </div>
        </div>
    );
};
