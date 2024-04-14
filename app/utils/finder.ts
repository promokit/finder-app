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

export const getParentId = (nodes: Node[], nodeId: string): string => {
    return nodes?.find(({ id }) => id == nodeId)?.parentId || '';
};

export const getNodeById = (nodes: Node[], nodeId: string): Node | undefined => {
    return nodes?.find(({ id }) => id == nodeId);
};
