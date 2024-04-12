import { nodeSignal } from '~/signals/node-signal';
import { Button } from '..';

export const ButtonRename = () =>
    nodeSignal.value !== 0 && <Button title="Rename Node" icon="plus" action={() => {}} />;
