import { Icon } from '../..';

import './ButtonRegular.css';

type Props = {
    action: () => void;
    title: string;
    icon: string;
    extraClass?: string;
};

export const ButtonRegular = ({ title, icon, action, extraClass = '' }: Props) => {
    return (
        <button className={`toolbar-button ${extraClass}`} onClick={action} title={title}>
            <Icon name={icon} />
        </button>
    );
};
