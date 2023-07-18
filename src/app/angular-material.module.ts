import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';

const materialModules = [
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule,
  MatTooltipModule,
  MatDialogModule
];
@NgModule({
  imports: [
    CommonModule,
    ...materialModules
  ],
  exports: [
    ...materialModules
  ],
  providers: [
    
  ]
})
export class AngularMaterialModule { }