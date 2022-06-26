import { GameCharacter } from "./game-characters";

export class GameCharactersFactory {
  public static getWarrior(level: number): GameCharacter {
    let warrior: GameCharacter;
    if (level < 10) {
      warrior = {
        strength: 18,
        dexterity: 12,
        health: 20,
        magic: 0,
      };
    } else {
      warrior = {
        strength: 30,
        dexterity: 21,
        health: 120,
        magic: 0,
      };
    }
    return warrior;
  }

  public static getMage(level: number): GameCharacter {
    let mage: GameCharacter;
    if (level < 10) {
      mage = {
        strength: 2,
        dexterity: 12,
        health: 20,
        magic: 10,
      };
    } else {
      mage = {
        strength: 2,
        dexterity: 100,
        health: 20,
        magic: 320,
      };
    }
    return mage;
  }
}
