import { contentViewSignal, locationSignal } from '~/signals';
import type { Node } from '~/types';
import { filterByDate, filterByLocation, filterByType } from '.';

export const applyFilters = (nodes: Node[] = []): Node[] => {
    const { fromDate, foldersOnly } = contentViewSignal.value?.filter;

    let nodesToDisplay: Node[] = nodes;

    nodesToDisplay = filterByLocation(nodesToDisplay, locationSignal.value);

    if (fromDate > 0) {
        nodesToDisplay = filterByDate(nodesToDisplay, fromDate);
    }

    if (foldersOnly) {
        nodesToDisplay = filterByType(nodesToDisplay);
    }

    return nodesToDisplay;
};
