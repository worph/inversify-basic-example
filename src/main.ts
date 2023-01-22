import Battle from "./interfaces/battle";
import container from "./config/ioc_config";
import SERVICE_IDENTIFIER from "./constants/identifiers";
import {Weapon} from "./interfaces";
import {Lazy} from "./interfaces/Lazy";

// Composition root
let epicBattle = container.get<Battle>(SERVICE_IDENTIFIER.BATTLE);

(async ()=>{
    console.log((await container.get<Lazy<Weapon>>(SERVICE_IDENTIFIER.WEAPON_PROVIDER)()).name);
    console.log(await epicBattle.fight());
})()
