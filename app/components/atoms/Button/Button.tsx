import { Icon } from '..';

import './Button.css';

type Props = {
    action: any;
    title: string;
    icon: string;
};

export const Button = ({ title, icon, action }: Props) => {
    return (
        <button className="toolbar-button" onClick={action} title={title}>
            <Icon name={icon} />
        </button>
    );
};
