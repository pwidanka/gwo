export interface ICountry {
    name: { common: string };
    flags: { png: string };
    fifa: string;
    capital: string;
    currencies: {name: string, symbol: string}[];
    population: number;
}