import { NodeType } from '~/types/enums';
import { getDate } from '~/utils/date';
import { Icon } from '..';

type Props = {
    name: string;
    date: number;
    type: NodeType;
};

export const Node = ({ name, type, date }: Props) => {
    return (
        <tr>
            <td>{type === NodeType.Dir ? <Icon name="addfolder" /> : <Icon name="file" />}</td>
            <td>{name}</td>
            <td>{type === NodeType.Dir ? 'Folder' : 'File'}</td>
            <td>{getDate(date)}</td>
        </tr>
    );
};
