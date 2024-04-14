import { locationSignal } from '~/signals';
import { getBreadcrumbs } from '~/utils';

export const Breadcrumbs = () => {
    const path = getBreadcrumbs(locationSignal.value);

    const handlerClick = (id: string) => (locationSignal.value = id);

    return (
        <div className="breadcrumbs">
            {path.map(({ id, name }) => (
                <span
                    key={id}
                    onClick={() => handlerClick(id)}
                    onKeyDown={() => handlerClick(id)}
                    role="button"
                    tabIndex={0}
                >
                    {name}
                </span>
            ))}
        </div>
    );
};
