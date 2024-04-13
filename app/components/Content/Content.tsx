import { locationSignal, storageSignal } from '~/signals';
import { NodeType } from '~/types/enums';
import { applyFilters } from '~/utils';
import { ContentHeading, Node } from '../atoms';

import './Content.css';

export const Content = () => {
    const nodesToDisplay = applyFilters(storageSignal.value);

    return (
        <main className="content">
            <table>
                <ContentHeading />
                <tbody>
                    {locationSignal.value !== '' && <Node id={''} name={'..'} type={NodeType.Dir} date={0} />}
                    {nodesToDisplay?.map(({ name, type, id, date }) => (
                        <Node key={id} id={id} name={name} type={type} date={date} />
                    ))}
                </tbody>
            </table>
        </main>
    );
};
