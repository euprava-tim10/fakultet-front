import { Fakultet } from "./Fakultet";

export interface Smer {
    id: number;
    naziv: string;
    nivoStudija: string;
    fakultet: Fakultet | undefined;
}