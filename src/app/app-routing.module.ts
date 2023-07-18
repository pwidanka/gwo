import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegionsComponent } from './regions/regions.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './countries/country/country.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: 'regions', component: RegionsComponent },
    { path: 'countries/:region', component: CountriesComponent },
    { path: 'country', component: CountryComponent },
  ] },
  { path: '**', redirectTo: 'regions' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
