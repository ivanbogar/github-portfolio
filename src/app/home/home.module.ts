import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { WorkDetailsComponent } from './work-details/work-details.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    HomeComponent, 
    WorkDetailsComponent,
    AboutComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
