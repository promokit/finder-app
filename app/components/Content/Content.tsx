import { storageSignal } from '~/signals';
import { applyFilters } from '~/utils/filter';
import { ContentHeading, Node } from '../atoms';

import './Content.css';

export const Content = () => {
    const nodesToDisplay = applyFilters(storageSignal.value);

    return (
        <main className="content">
            <table>
                <ContentHeading />
                <tbody>
                    {nodesToDisplay?.map(({ name, type, id, date }) => (
                        <Node key={id} id={id} name={name} type={type} date={date} />
                    ))}
                </tbody>
            </table>
        </main>
    );
};
