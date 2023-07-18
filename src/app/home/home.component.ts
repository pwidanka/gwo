import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AboutMeComponent } from '../about-me/about-me.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private router: Router,
    private location: Location,
    private dialog: MatDialog
  ) { }

  async ngOnInit() {
    this.router.navigate(['/regions']);
  }

  onBack(){
    this.location.back();
  }

  showBackButton(): boolean {
    return this.router.url !== '/regions';
  }

  aboutMe(){
    this.dialog.open(AboutMeComponent);
  }
}
