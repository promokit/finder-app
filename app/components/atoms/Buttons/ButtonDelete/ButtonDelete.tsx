import { nodeSignal } from '~/signals/node-signal';
import { deleteNode } from '~/utils/crud';
import { ButtonRegular } from '..';

export const ButtonDelete = () =>
    nodeSignal.value !== 0 && (
        <ButtonRegular
            title="Delete"
            icon="plus"
            extraClass="delete"
            action={() => deleteNode(nodeSignal.value)}
        />
    );
