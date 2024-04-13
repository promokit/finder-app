import { NodeType } from './enums';

type Storage = {
    get(): Node[];
    set(data: Node[]): void;
};

export type Node = {
    id: string;
    type: NodeType;
    name: string;
    date: number;
    parentId: string;
};

export type ContentView = {
    filter: {
        foldersOnly: boolean;
        fromDate: number;
    };
    parent: string | null;
};
