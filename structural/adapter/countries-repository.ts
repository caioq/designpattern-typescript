// repository layer: layer between the persistence layer and the rest of application

import { Country } from "./country";
import fs from "fs";

export enum Continent {
  Africa = "Africa",
  Asia = "Asia",
  Europe = "Europe",
  NorthAmerica = "NorthAmerica",
  SouthAmerica = "SouthAmerica",
}

export class CountriesRepository {
  async all(): Promise<Country[]> {
    return Promise.all([Continent.Asia, Continent.Europe].map((continent) => this.allByContinent(continent))).then(
      (results) => {
        const consolidated: Country[] = [];
        results.forEach((result) => {
          consolidated.push(...result);
        });
        return consolidated;
      }
    );
  }

  async allByContinent(continent: Continent): Promise<Country[]> {
    return new Promise<Country[]>((resolve, reject) => {
      fs.readFile(this.continentToFileName(continent), "utf-8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          const countries: Country[] = JSON.parse(data);
          resolve(countries);
        }
      });
    });
  }

  // not the best implementation, just an example
  async allByCurrency(currency: string): Promise<Country[]> {
    let all = await this.all();
    return all.filter((country) => country.currency === currency);
  }

  private continentToFileName(continent: Continent) {
    let prefix: string = "countries/";
    let fileNames: any = {};
    fileNames[Continent.Africa] = "africa.json";
    fileNames[Continent.Asia] = "asia.json";
    fileNames[Continent.Europe] = "europe.json";
    return prefix + fileNames[Continent[continent]];
  }
}
