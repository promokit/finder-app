import { locationSignal, storageSignal } from '~/signals';
import type { Node } from '~/types';

type CreateDetails = Pick<Node, 'type' | 'name'>;
type UpdateDetails = Pick<Node, 'id' | 'name'>;

export const createNode = ({ type, name }: CreateDetails) => {
    const nodes = storageSignal.value || [];
    const parentId = locationSignal.value;

    const id = crypto.randomUUID();
    const date = new Date().getTime();

    const newNode: Node = {
        id,
        type,
        name,
        date,
        parentId,
    };

    nodes.push(newNode);

    storageSignal.value = [...nodes];
};

export const readNodes = (id: string | null = null): Node[] => {
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

export const deleteNode = (id: string) => {
    storageSignal.value = storageSignal.value.filter((node) => node.id !== id);
};
