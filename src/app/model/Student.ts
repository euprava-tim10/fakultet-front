import { StatusStudija } from "./StatusStudija";

export interface Student {
    id: number;
    ime: string;
    prezime: string;
    statusStudija: StatusStudija[];
}