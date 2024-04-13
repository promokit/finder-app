import { storageSignal } from '~/signals';
import type { Node } from '~/types';
import { NodeType } from '~/types/enums';

const storage = storageSignal.value;

export const filterByLocation = (nodes: Node[], location: string): Node[] => {
    return nodes?.filter(({ parentId }) => parentId == location);
};

export const filterByDate = (nodes: Node[], fromDate: number): Node[] => {
    return nodes?.filter(({ date }) => date >= fromDate);
};

export const filterByType = (nodes: Node[]): Node[] => {
    return nodes?.filter(({ type }) => type === NodeType.Dir);
};

export const getParentId = (nodeId: string): string => {
    return storage?.find(({ id }) => id == nodeId)?.parentId || '';
};

export const getNodeNameById = (nodeId: string): string => {
    return storage?.find(({ id }) => id == nodeId)?.name || '';
};
