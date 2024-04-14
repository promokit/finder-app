import { storageSignal } from '~/signals';
import { Path } from '~/types';
import { getNodeById } from '.';

export const getBreadcrumbs = (nodeId: string, breadcrumbs: Path[] = []) => {
    const node = getNodeById(storageSignal.value, nodeId);

    if (!node) {
        return breadcrumbs;
    }

    breadcrumbs.unshift({ id: node.id, name: node.name });

    if (node.parentId !== '') {
        getBreadcrumbs(node.parentId, breadcrumbs);
    }

    return breadcrumbs;
};
