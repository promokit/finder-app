import { locationSignal } from '~/signals';
import { getBreadcrumbs } from '~/utils';

export const Breadcrumbs = () => {
    const path = getBreadcrumbs(locationSignal.value);

    return (
        <div className="breadcrumbs">
            {path.map(({ id, name }) => (
                <span
                    key={id}
                    onClick={() => (locationSignal.value = id)}
                    onKeyDown={() => (locationSignal.value = id)}
                    role="button"
                    tabIndex={0}
                >
                    {name}
                </span>
            ))}
        </div>
    );
};
