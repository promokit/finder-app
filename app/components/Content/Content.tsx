import { storageSignal } from '~/signals/storage-signal';
import { ContentHeading, Node } from '../atoms';

import './Content.css';

export const Content = () => {
    return (
        <div className="content">
            <table>
                <ContentHeading />
                <tbody>
                    {storageSignal.value.map(({ name, type, id, date }) => (
                        <Node key={id} id={id} name={name} type={type} date={date} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};
