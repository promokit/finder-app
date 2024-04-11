import storage from '~/storage';

import { Node } from '~/types';

export const createNode = ({ type, name }: Pick<Node, 'type' | 'name'>) => {
    const nodes = storage.get();
    const id = nodes.length === 0 ? 1 : Math.max(...nodes.map((node) => node.id)) + 1;
    const date = new Date().getTime();

    const newNode: Node = {
        id,
        type,
        name,
        date,
        children: [],
    };

    nodes.push(newNode);

    storage.set(nodes);
};

export const readNodes = (id: number | null = null): Node[] => {
    const nodes = storage.get();
    if (id) {
        return nodes.filter((node) => node.id === id);
    }
    return nodes;
};

export const updateNode = () => {};
export const deleteNode = () => {};
