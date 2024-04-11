import { Button } from '../atoms/Button/Button';

import './Toolbar.css';

export const Toolbar = () => {
    return (
        <aside className="toolbar">
            <Button title="file" icon="addfile" action={() => console.log('work')} />
            <Button title="folder" icon="addfolder" action={() => console.log('work')} />
        </aside>
    );
};
