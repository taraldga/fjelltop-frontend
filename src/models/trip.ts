import { Mountain } from "./mountain";

export interface Trip {
    id: string;
    name: string;
    description: string;
    startLocation: string;
    distance: number;
    ascension: number;
    start: Date;
    end: Date;
    mountain: Mountain;
}