import { NodeType } from './enums';

// type Storage = {
//     get(): Node[];
//     set(data: Node[]): void;
// };

export type Node = {
    id: number;
    type: NodeType;
    name: string;
    date: number;
    children: Node[];
};

export type ContentView = {
    filter: {
        foldersOnly: boolean;
        fromDate: number;
    };
    parent: string | null;
};
