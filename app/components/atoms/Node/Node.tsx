import { nodeSignal } from '~/signals/node-signal';
import { NodeType } from '~/types/enums';
import { getDate } from '~/utils/date';
import { Icon } from '..';

type Props = {
    id: number;
    name: string;
    date: number;
    type: NodeType;
};

export const Node = ({ name, type, date, id }: Props) => {
    const handleClick = () => {
        nodeSignal.value = nodeSignal.value === id ? 0 : id;
    };

    return (
        <tr onClick={handleClick} className={nodeSignal.value === id ? 'selected' : 'regular'}>
            <td>
                <Icon name={type === NodeType.Dir ? 'addfolder' : 'file'} />
            </td>
            <td>{name}</td>
            <td>{type === NodeType.Dir ? 'Folder' : 'File'}</td>
            <td>{getDate(date)}</td>
        </tr>
    );
};
