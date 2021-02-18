import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { WorksComponent } from './home/works/works.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home',         component: WorksComponent, data: { animation: 'home' } },
  { path: 'about',        component: AboutComponent, data: { animation: 'about' } },
  { path: '',             redirectTo: '/home', pathMatch: 'full' },
  { path: '**',           component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
