import { nodeSignal } from '~/signals';
import { deleteNode } from '~/utils';
import { ButtonRegular } from '..';

export const ButtonDelete = () =>
    nodeSignal.value !== '' && (
        <ButtonRegular
            title="Delete"
            icon="plus"
            extraClass="delete"
            handleClick={() => deleteNode(nodeSignal.value)}
        />
    );
