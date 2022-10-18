import axios from "axios";

export class RestCountriesRepository {
  private _baseUrl = "https://restcountries.com/v2/";

  private async getParsedCountries(url: string): Promise<any[]> {
    return axios
      .get(url)
      .then((response) => response.data)
      .then((data) => data as any[]);
  }

  async getAll(): Promise<any[]> {
    return this.getParsedCountries(`${this._baseUrl}all`);
  }

  async getByRegion(region: string): Promise<any[]> {
    return this.getParsedCountries(`${this._baseUrl}region/${region}`);
  }

  async getByCurrency(currency: string): Promise<any[]> {
    return this.getParsedCountries(`${this._baseUrl}currency/${currency}`);
  }

  async getByName(name: string): Promise<any[]> {
    return this.getParsedCountries(`${this._baseUrl}name/${name}`);
  }
}
