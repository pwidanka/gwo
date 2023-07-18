import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent {
  regions: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  constructor(private router: Router) { }

  onRegionDetails(region: string) {
    this.router.navigate(['/countries/' + region]);
  }
}
