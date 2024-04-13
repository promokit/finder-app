import { getNodeNameById, getParentId } from '.';

export const getBreadcrumbs = (nodeId: string, breadcrumbs: string[] = []) => {
    breadcrumbs.push(getNodeNameById(nodeId));

    const parentId = getParentId(nodeId);

    if (parentId !== '') {
        getBreadcrumbs(parentId, breadcrumbs);
    }

    return breadcrumbs;
};
