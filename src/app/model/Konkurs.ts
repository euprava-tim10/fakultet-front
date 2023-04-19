import { Fakultet } from "./Fakultet";
import { KvotaSmer } from "./KvotaSmer";

export interface Konkurs {
    id: number;
    statusKonkursa: string;
    datumRaspisivanja: string;
    datumOkoncavanja: string;
    fakultet: Fakultet | undefined;
    kvote: KvotaSmer[];
}