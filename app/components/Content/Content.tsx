import { ContentHeading, Node } from '~/components';
import { locationSignal, nodeSignal, storageSignal } from '~/signals';
import { NodeType } from '~/types/enums';
import { applyFilters, getParentId } from '~/utils';

import { KeyboardEvent, useEffect, useRef } from 'react';
import './Content.css';

export const Content = () => {
    const nodesToDisplay = applyFilters(storageSignal.value);

    const tableRef = useRef<HTMLTableSectionElement>(null);

    useEffect(() => {
        nodeSignal.value = '';
        tableRef.current?.querySelector('tr')?.focus();
    });

    const handleKeyDown = (e: KeyboardEvent<HTMLTableSectionElement>) => {
        if (!tableRef.current) return;

        const rows: Array<HTMLTableRowElement> = [...tableRef.current.querySelectorAll('tr')];
        const activeRow: HTMLTableRowElement | null = tableRef.current.querySelector('tr:focus');

        let nextRow: HTMLTableRowElement | null = null;

        if (e.key === 'ArrowUp') {
            nextRow = (
                activeRow ? activeRow.previousElementSibling : rows[rows.length - 1]
            ) as HTMLTableRowElement;
        }

        if (e.key === 'ArrowDown') {
            nextRow = (activeRow ? activeRow.nextElementSibling : rows[0]) as HTMLTableRowElement;
        }

        if (nextRow) {
            activeRow?.classList.remove('selected');
            nextRow.classList.add('selected');
            nextRow.focus();
        }
    };

    return (
        <main className="content">
            <table>
                <ContentHeading />
                <tbody tabIndex={0} onKeyDown={handleKeyDown} ref={tableRef}>
                    {locationSignal.value !== '' && (
                        <Node
                            id={getParentId(storageSignal.value, locationSignal.value)}
                            name={'..'}
                            type={NodeType.Dir}
                            date={0}
                            parentId=""
                        />
                    )}
                    {nodesToDisplay?.map(({ name, type, id, date, parentId }) => (
                        <Node key={id} id={id} name={name} type={type} date={date} parentId={parentId} />
                    ))}
                </tbody>
            </table>
        </main>
    );
};
