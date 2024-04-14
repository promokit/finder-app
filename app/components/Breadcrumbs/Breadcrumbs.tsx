import { locationSignal } from '~/signals';
import { getBreadcrumbs } from '~/utils';

export const Breadcrumbs = () => {
    const path = getBreadcrumbs(locationSignal.value);

    return (
        <div className="breadcrumbs">
            {path.map(({ id, name }) => (
                <span key={id} onClick={() => (locationSignal.value = id)}>
                    {name}
                </span>
            ))}
        </div>
    );
};
