import { NodeType } from './enums';

type Storage = {
    get(): Node[];
    set(data: Node[]): void;
};

export type Node = {
    id: number;
    type: NodeType;
    name: string;
    date: number;
    children: Node[];
};
