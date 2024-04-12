import { nodeSignal } from '~/signals/node-signal';
import { deleteNode } from '~/utils/crud';
import { Button } from '..';

export const ButtonDelete = () =>
    nodeSignal.value !== 0 && (
        <Button
            title="Delete Node"
            icon="plus"
            extraClass="delete"
            action={() => deleteNode(nodeSignal.value)}
        />
    );
