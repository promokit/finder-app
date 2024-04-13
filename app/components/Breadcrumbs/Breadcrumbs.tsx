import { locationSignal } from '~/signals';
import { getBreadcrumbs } from '~/utils';

export const Breadcrumbs = () => {
    const path = getBreadcrumbs(locationSignal.value);
    console.log(path);

    return (
        <div className="breadcrumbs">
            .
            {path.reverse().map((p) => (
                <span key={p}>/{p}</span>
            ))}
        </div>
    );
};
