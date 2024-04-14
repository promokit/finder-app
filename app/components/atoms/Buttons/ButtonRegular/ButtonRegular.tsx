import { Icon } from '../..';

import './ButtonRegular.css';

type Props = {
    handleClick: () => void;
    title: string;
    icon: string;
    extraClass?: string;
};

export const ButtonRegular = ({ title, icon, handleClick, extraClass = '' }: Props) => (
    <button className={`toolbar-button ${extraClass}`} onClick={handleClick} title={title}>
        <Icon name={icon} />
    </button>
);
