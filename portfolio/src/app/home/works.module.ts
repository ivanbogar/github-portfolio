import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorksRoutingModule } from './works-routing.module';
import { WorksComponent } from './works/works.component';
import { WorkDetailsComponent } from './work-details/work-details.component';
import { FooterComponent } from '../footer/footer.component';
import { HeroComponent } from '../hero/hero.component';


@NgModule({
  declarations: [ WorksComponent, WorkDetailsComponent, HeroComponent, FooterComponent ],
  imports: [
    CommonModule,
    WorksRoutingModule
  ],
  exports: [ HeroComponent, FooterComponent ]
})
export class WorksModule { }
