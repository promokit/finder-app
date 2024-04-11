import { STORAGE_KEY } from '~/constants';
import { Node, Storage } from '~/types';

const storage: Storage = {
    get(): Node[] {
        const dataRaw = localStorage.getItem(STORAGE_KEY);
        const data = dataRaw ? JSON.parse(dataRaw) : [];

        return data;
    },
    set(data: []) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    },
};

export default storage;
