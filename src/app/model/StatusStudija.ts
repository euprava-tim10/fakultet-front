import { Smer } from "./Smer";

export interface StatusStudija {
    id: number;
    datumUpisa: string;
    datumZavrsetka: string;
    smer: Smer | undefined;
}