import {Weapon} from "./weapon";
import {Lazy} from "./Lazy";

export interface Warrior {
    name: string;
    weapon: Lazy<Weapon>;
}
