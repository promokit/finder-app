import type { Signal } from '@preact/signals-react';
import { effect, signal } from '@preact/signals-react';
import store from 'store2';
import { STORAGE_KEY } from '~/constants/constants';
import type { Node } from '~/types';

export const storageSignal: Signal<Node[]> = signal(store(STORAGE_KEY));

effect(() => {
    store(
        STORAGE_KEY,
        storageSignal.value?.sort((a, b) => a.id - b.id)
    );
});
