import { GameCharacterFactory } from "./game-characters-factory";

let warrior = GameCharacterFactory.getWarrior(6);
let mage = GameCharacterFactory.getMage(12);

console.log(`Warrior at level 12: ${warrior}`);
