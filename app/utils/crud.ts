import { storageSignal } from '~/signals/storage-signal';

import { Node } from '~/types';

type Details = Pick<Node, 'type' | 'name'>;

export const createNode = ({ type, name }: Details) => {
    const nodes = storageSignal.value;
    const id = nodes.length === 0 ? 1 : Math.max(...nodes.map((node) => node.id)) + 1;
    const date = new Date().getTime();

    nodes.push({
        id,
        type,
        name,
        date,
        children: [],
    });

    storageSignal.value = [...nodes];
};

export const readNodes = (id: number | null = null): Node[] => {
    const nodes = storageSignal.value;
    if (id) {
        return nodes.filter((node) => node.id === id);
    }
    return nodes;
};

export const updateNode = () => {};
export const deleteNode = () => {};
