import { GameCharactersFactory } from "./game-characters-factory";

let warrior = GameCharactersFactory.getWarrior(6);
let mage = GameCharactersFactory.getMage(12);

console.log(`Warrior at level 12: ${warrior}`);
