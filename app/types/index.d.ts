import { NodeType } from './enums';

export type Node = {
    type: keyof NodeType;
    name: string;
    date: string;
    children: Node[];
};
