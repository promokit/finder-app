import { FormEvent, useState } from 'react';
import { NodeType } from '~/types/enums';
import { PopupState } from '../Toolbar/Toolbar.types';
import { Button } from '../atoms';

// import { createNode } from '~/utils/crud';
// import { createNode } from '~/utils/crud';
import { createNode } from '~/utils/crud';
import './Popup.css';

type Props = {
    onClose: ({ show, type }: PopupState) => void;
    type: NodeType;
};

export const Popup = ({ onClose, type }: Props) => {
    const [nodeName, setNodeName] = useState('');

    const hidePopup = () => onClose({ show: false, type });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNodeName(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        createNode({
            type,
            name: nodeName,
        });

        hidePopup();
    };

    return (
        <div className="popup window-view">
            <header>
                <div>{`Create ${type === NodeType.Dir ? 'Folder' : 'File'}`}</div>
                <Button title="Close Popup" icon="plus" action={hidePopup} />
            </header>
            <div className="popup-body">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="nodename"
                        value={nodeName}
                        onChange={handleChange}
                        placeholder={`${type === NodeType.Dir ? 'Folder' : 'File'} name:`}
                    />
                    <button className="button" type="submit">
                        Create
                    </button>
                    <input type="hidden" name="nodetype" value={type} />
                </form>
            </div>
        </div>
    );
};
