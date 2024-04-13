import { locationSignal, nodeSignal } from '~/signals';
import { Node as TNode } from '~/types';
import { NodeType } from '~/types/enums';
import { getDate } from '~/utils';
import { Icon } from '..';

export const Node = ({ name, type, date, id }: Omit<TNode, 'parentId'>) => {
    const handleClick = () => {
        nodeSignal.value = id;
    };

    const handleDoubleClick = () => {
        if (type === NodeType.Dir) {
            locationSignal.value = id;
        }
    };

    return (
        <tr
            onClick={handleClick}
            onDoubleClick={handleDoubleClick}
            className={nodeSignal.value === id && id !== '' ? 'selected' : 'regular'}
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
