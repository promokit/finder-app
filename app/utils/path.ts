import { Path } from '~/types';
import { getNodeNameById, getParentId } from '.';

export const getBreadcrumbs = (nodeId: string, breadcrumbs: Path[] = []) => {
    breadcrumbs.unshift({ id: nodeId, name: getNodeNameById(nodeId) });

    const parentId = getParentId(nodeId);

    if (parentId !== '') {
        getBreadcrumbs(parentId, breadcrumbs);
    }

    return breadcrumbs;
};
