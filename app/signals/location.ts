import type { Signal } from '@preact/signals-react';
import { signal } from '@preact/signals-react';

export const locationSignal: Signal<string> = signal('');
