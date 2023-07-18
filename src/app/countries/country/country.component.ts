import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICountry } from './country.interface';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent {
  country: ICountry;

  constructor(private router: Router) {
    this.country = this.router.getCurrentNavigation()?.extras.state?.['country'];
    this.country.currencies = Object.values(this.country.currencies);
  }

}
