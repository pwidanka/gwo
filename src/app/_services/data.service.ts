import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICountry } from '../countries/country/country.interface';

@Injectable({providedIn: 'root'})
export class DataService {
  private apiUrl = 'https://restcountries.com/v3.1/';

  constructor(private http: HttpClient) {}

  getRegion(continent: string): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(this.apiUrl + 'region/' + continent);
  }
}