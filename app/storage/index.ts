import { STORAGE_KEY } from '~/constants';

const dataRaw = localStorage.getItem(STORAGE_KEY);

const data = dataRaw ? JSON.parse(dataRaw) : [];

const storage = {
    get() {
        return data;
    },
    set(data: []) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    },
};

export default storage;
