import { KeyboardEvent } from 'react';
import { locationSignal, nodeSignal, storageSignal } from '~/signals';
import { Node as TNode } from '~/types';
import { NodeType } from '~/types/enums';
import { getDate, getNodeById } from '~/utils';
import { Icon } from '..';

export const Node = ({ name, type, date, id, parentId }: TNode) => {
    const handleClick = () => {
        if (name !== '..') {
            nodeSignal.value = id;
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLTableRowElement>) => {
        if (e.code === 'Enter') {
            handleDoubleClick();
        }

        if (e.code === 'Backspace') {
            const node = getNodeById(storageSignal.value, parentId);
            console.log(node);

            node ? (locationSignal.value = node.parentId) : handleDoubleClick();
        }
    };

    const handleDoubleClick = () => {
        if (type === NodeType.Dir) {
            locationSignal.value = id;
        }
    };

    return (
        <tr
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            onDoubleClick={handleDoubleClick}
            className={nodeSignal.value === id && id !== '' ? 'selected' : 'regular'}
            tabIndex={0}
        >
            <td>
                <Icon name={type === NodeType.Dir ? 'folder' : 'file'} />
            </td>
            <td>{name}</td>
            <td>{type === NodeType.Dir ? 'Folder' : 'File'}</td>
            <td>{date !== 0 && getDate(date)}</td>
        </tr>
    );
};
