import type { Node } from '~/types';
import { NodeType } from '~/types/enums';

export const filterByLocation = (nodes: Node[], location: string): Node[] => {
    return nodes?.filter(({ parentId }) => parentId == location);
};

export const filterByDate = (nodes: Node[], fromDate: number): Node[] => {
    return nodes?.filter(({ date }) => date >= fromDate);
};

export const filterByType = (nodes: Node[]): Node[] => {
    return nodes?.filter(({ type }) => type === NodeType.Dir);
};

export const getParentId = (storage: Node[], nodeId: string): string => {
    return storage?.find(({ id }) => id == nodeId)?.parentId || '';
};

export const getNodeById = (storage: Node[], nodeId: string): Node | undefined => {
    return storage?.find(({ id }) => id == nodeId);
};
