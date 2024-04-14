import { storageSignal } from '~/signals';
import { Path } from '~/types';
import { getNodeById } from '.';

export const getBreadcrumbs = (nodeId: string, breadcrumbs: Path[] = []) => {
    const node = getNodeById(storageSignal.value, nodeId);

    if (!node) {
        return breadcrumbs;
    }

    const { id, name, parentId } = node;

    breadcrumbs.unshift({ id, name });

    if (parentId !== '') {
        getBreadcrumbs(parentId, breadcrumbs);
    }

    return breadcrumbs;
};
