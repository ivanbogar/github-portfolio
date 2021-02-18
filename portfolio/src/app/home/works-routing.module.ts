import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorksComponent } from './works/works.component';
import { WorkDetailsComponent } from './work-details/work-details.component';

const routes: Routes = [
  { path: 'home', component: WorksComponent, data: { animation: 'home' } },
  { path: 'work/:id', component: WorkDetailsComponent, data: { animation: 'work' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorksRoutingModule { }
