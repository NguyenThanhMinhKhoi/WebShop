import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { ShibaComponent } from '../shiba/shiba.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    ShibaComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSortModule,
    MatButtonModule,
    MatCardModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    ShibaComponent,
    MatToolbarModule,
    MatIconModule,
    MatSortModule,
    MatButtonModule,
    MatCardModule,
    RouterModule
  ]
})
export class SharedModule { }
