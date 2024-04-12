import store from 'store2';
import { STORAGE_KEY } from '~/constants/constants';
import { Node, Storage } from '~/types';

const storage: Storage = {
    get(): Node[] {
        return store(STORAGE_KEY);
    },
    set(data: []) {
        store(STORAGE_KEY, data);
    },
};

export default storage;
