import { contentViewSignal } from '~/signals';
import type { Node } from '~/types';
import { NodeType } from '~/types/enums';

export const applyFilters = (nodes: Node[]): Node[] => {
    const { fromDate, foldersOnly } = contentViewSignal.value?.filter;

    let nodesToDisplay: Node[] = nodes;

    if (fromDate > 0) {
        nodesToDisplay = filterDate(nodesToDisplay, fromDate);
    }

    if (foldersOnly) {
        nodesToDisplay = filterType(nodesToDisplay);
    }

    return nodesToDisplay;
};

const filterDate = (nodes: Node[], fromDate: number): Node[] => {
    return nodes.filter(({ date }) => date >= fromDate);
};

const filterType = (nodes: Node[]): Node[] => {
    return nodes.filter(({ type }) => type === NodeType.Dir);
};
