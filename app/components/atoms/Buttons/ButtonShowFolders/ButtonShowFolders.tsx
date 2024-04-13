import { contentViewSignal } from '~/signals/content-view';
import { ButtonRegular } from '..';

export const ButtonShowFolders = () => {
    const handleAction = () => {
        contentViewSignal.value = {
            ...contentViewSignal.value,
            filter: {
                ...contentViewSignal.value.filter,
                foldersOnly: !contentViewSignal.value?.filter.foldersOnly,
            },
        };
    };

    return (
        <ButtonRegular
            title="Show Folders Only"
            icon="folders-only"
            extraClass={contentViewSignal.value.filter.foldersOnly ? 'active' : ''}
            handleClick={handleAction}
        />
    );
};
