import {
    ButtonCalendar,
    ButtonCreateFile,
    ButtonCreateFolder,
    ButtonDelete,
    ButtonRename,
    ButtonShowFolders,
    Separator,
} from '~/components';

export const Tools = () => (
    <div className="actions">
        <ButtonDelete />
        <ButtonRename />
        <Separator />
        <ButtonShowFolders />
        <ButtonCalendar />
        <Separator />
        <ButtonCreateFile />
        <ButtonCreateFolder />
    </div>
);
