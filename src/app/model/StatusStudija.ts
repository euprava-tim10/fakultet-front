import { Smer } from "./Smer";

export interface StatusStudija {
    id: number;
    datumUpisa: string;
    datumZavrsetka: string;
    prosek: number;
    smer: Smer | undefined;
}