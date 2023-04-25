import { Student } from "./Student";

export interface Obavestenje {
    id: number;
    student: Student | undefined;
    tekst: string;
    link: string;
    datumKreiranja: string;
}