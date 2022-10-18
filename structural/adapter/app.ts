import { Continent, CountriesRepository } from "./countries-repository";
import { RestCountriesAdapter } from "./rest-countries-adapter";
import { RestCountriesRepository } from "./rest-countries-repository";

// const countriesRepo = new CountriesRepository();
const countriesRepo = new RestCountriesAdapter(new RestCountriesRepository());

countriesRepo.allByCurrency("EUR").then((euroCountries) => {
  console.log("Euro countries: ", euroCountries);
});

countriesRepo.allByContinent(Continent.Asia).then((asia) => {
  console.log(`Number of Asia countries stored: ${asia.length}`);
});

// const restCountriesRepo = new RestCountriesRepository();
// restCountriesRepo.getAll().then((countries) => {
//   console.log(`Number of countries in world: ${countries.length}`);
// });
