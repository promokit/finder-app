import { contentViewSignal } from '~/signals/content-view';
import { ButtonRegular } from '..';

export const ButtonShowFolders = () => {
    const toggleView = () => {
        contentViewSignal.value = { foldersOnly: !contentViewSignal.value.foldersOnly };
    };

    return <ButtonRegular title="Show Folders Only" icon="folders-only" action={toggleView} />;
};
