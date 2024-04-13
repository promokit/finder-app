import { contentViewSignal, locationSignal } from '~/signals';
import type { Node } from '~/types';
import { NodeType } from '~/types/enums';

export const applyFilters = (nodes: Node[]): Node[] => {
    const { fromDate, foldersOnly } = contentViewSignal.value?.filter;

    let nodesToDisplay: Node[] = nodes;

    nodesToDisplay = filterByLocation(nodesToDisplay);

    if (fromDate > 0) {
        nodesToDisplay = filterByDate(nodesToDisplay, fromDate);
    }

    if (foldersOnly) {
        nodesToDisplay = filterByType(nodesToDisplay);
    }

    return nodesToDisplay;
};

const filterByLocation = (nodes: Node[]): Node[] => {
    return nodes.filter(({ parentId }) => parentId == locationSignal.value);
};

const filterByDate = (nodes: Node[], fromDate: number): Node[] => {
    return nodes.filter(({ date }) => date >= fromDate);
};

const filterByType = (nodes: Node[]): Node[] => {
    return nodes.filter(({ type }) => type === NodeType.Dir);
};
