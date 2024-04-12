import { Icon } from '..';

import './Button.css';

type Props = {
    action: any;
    title: string;
    icon: string;
    extraClass?: string;
};

export const Button = ({ title, icon, action, extraClass = '' }: Props) => {
    return (
        <button className={`toolbar-button ${extraClass}`} onClick={action} title={title}>
            <Icon name={icon} />
        </button>
    );
};
