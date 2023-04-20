import { Konkurs } from "./Konkurs";
import { Smer } from "./Smer";
import { Student } from "./Student";

export interface PrijavaKonkurs {
    id: number;
    prosek: number;
    konkurs: Konkurs | undefined;
    student: Student | undefined;
    prvaZelja: Smer | undefined;
    statusPrijave: string;
}