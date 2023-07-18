import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './countries.component';
import { CountryComponent } from './country/country.component';
import { AngularMaterialModule } from '../angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [CountriesComponent, CountryComponent],
    imports: [CommonModule, AngularMaterialModule, FlexLayoutModule],
    exports: [CountriesComponent, CountryComponent]
})
export class CountriesModule { }