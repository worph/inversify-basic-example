import "reflect-metadata";

import { Container } from "inversify";

import {
  Battle,
  Weapon,
  Warrior
} from "../interfaces";

import {
  EpicBattle,
  Katana,
  Shuriken,
  Ninja,
  Samurai
} from "../entities";

import SERVICE_IDENTIFIER from "../constants/identifiers";
import TAG from "../constants/tags";
import {Lazy} from "../interfaces/Lazy";

let container = new Container();

container.bind<Warrior>(SERVICE_IDENTIFIER.WARRIOR).to(Ninja).whenTargetNamed(TAG.CHINESE);
container.bind<Warrior>(SERVICE_IDENTIFIER.WARRIOR).to(Samurai).whenTargetNamed(TAG.JAPANESE);
container.bind<Weapon>(SERVICE_IDENTIFIER.WEAPON).to(Shuriken);
container.bind<Battle>(SERVICE_IDENTIFIER.BATTLE).to(EpicBattle);

container.bind<Lazy<Weapon>>(SERVICE_IDENTIFIER.WEAPON_PROVIDER).toProvider<Weapon>((context) => {
  return () => {
    return new Promise<Weapon>((resolve) => {
      let katana = context.container.get<Weapon>(SERVICE_IDENTIFIER.WEAPON);//IOC instantiation
      //let katana = new Katana();//manual instantiation
      //let katana = await import("@weapon/katana"); //async import of the construction
      resolve(katana);
    });
  };
});

export default container;
