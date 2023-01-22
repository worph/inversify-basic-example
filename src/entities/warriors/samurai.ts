import { inject, injectable } from "inversify";

import SERVICE_IDENTIFIER from "../../constants/identifiers";
import {Warrior, Weapon} from "../../interfaces";
import {Lazy} from "../../interfaces/Lazy";

@injectable()
export class Samurai implements Warrior {
    public name: string;
    public constructor(
        @inject(SERVICE_IDENTIFIER.WEAPON_PROVIDER) public weapon: Lazy<Weapon>
    ) {
        this.name = "Samurai";
    }
}
