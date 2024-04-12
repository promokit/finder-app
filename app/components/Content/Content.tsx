import { contentViewSignal } from '~/signals/content-view';
import { storageSignal } from '~/signals/storage';
import { NodeType } from '~/types/enums';
import { ContentHeading, Node } from '../atoms';

import './Content.css';

export const Content = () => {
    const { foldersOnly } = contentViewSignal.value;

    const nodesTodisplay = foldersOnly
        ? storageSignal.value.filter(({ type }) => type === NodeType.Dir)
        : storageSignal.value;

    return (
        <div className="content">
            <table>
                <ContentHeading />
                <tbody>
                    {nodesTodisplay.map(({ name, type, id, date }) => (
                        <Node key={id} id={id} name={name} type={type} date={date} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};
