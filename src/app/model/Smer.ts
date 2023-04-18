import { Fakultet } from "./Fakultet";

export interface Smer {
    id: number;
    naziv: string;
    fakultet: Fakultet | undefined;
}