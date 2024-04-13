import { storageSignal } from '~/signals/storage';

import { Node } from '~/types';

type CreateDetails = Pick<Node, 'type' | 'name'>;
type UpdateDetails = Pick<Node, 'id' | 'name'>;

export const createNode = ({ type, name }: CreateDetails) => {
    const nodes = storageSignal.value || [];

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
    if (id !== null) {
        return storageSignal.value?.filter((node) => node.id === id);
    }
    return storageSignal.value;
};

export const updateNode = ({ id, name }: UpdateDetails): boolean => {
    const node = storageSignal.value.find((node) => node.id === id);
    const filteredNodes = storageSignal.value.filter((node) => node.id !== id);

    if (!node) {
        return false;
    }

    storageSignal.value = [...filteredNodes, { ...node, name }];

    return true;
};

export const deleteNode = (id: number) => {
    storageSignal.value = storageSignal.value.filter((node) => node.id !== id);
};
