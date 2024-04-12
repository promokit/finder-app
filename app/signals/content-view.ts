import type { Signal } from '@preact/signals-react';
import { signal } from '@preact/signals-react';
import { contentViewDefaults } from '~/constants/defaults';
import type { ContentView } from '~/types';

export const contentViewSignal: Signal<ContentView> = signal(contentViewDefaults);
