import Icons from '/icons.svg';

import './Icon.css';

type Props = {
    name: string;
};

export const Icon = ({ name }: Props) => {
    return (
        <svg className="svgic" role="img" aria-label={`${name} image`}>
            <use href={`${Icons}#${name}`}></use>
        </svg>
    );
};
