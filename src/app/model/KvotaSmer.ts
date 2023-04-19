import { Smer } from "./Smer";

export interface KvotaSmer {
    id: number;
    kvota: number;
    smer: Smer | undefined;
}