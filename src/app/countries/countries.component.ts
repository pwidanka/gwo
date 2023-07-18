import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DataService } from '../_services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ICountry } from './country/country.interface';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent {
  countries$!: Observable<ICountry[]>;
  region!: string;

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe(params => this.region = params['region']);
  }

  ngOnInit() {
    this.countries$ = this.data.getRegion(this.region).pipe(
      map((data: ICountry[]) => {
        return data.sort((a, b) => a.name.common.localeCompare(b.name.common));
      }));
  }

  onCountryDetails(country: ICountry) {
    this.router.navigate(['country'], { state: { country: country } });
  }
}
