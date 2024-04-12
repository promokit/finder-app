import { Signal, effect, signal } from '@preact/signals-react';
import store from 'store2';
import { STORAGE_KEY } from '~/constants';
import { Node } from '~/types';

export const storageSignal: Signal<Node[]> = signal(store(STORAGE_KEY));

effect(() => {
    store(STORAGE_KEY, storageSignal.value);
});
