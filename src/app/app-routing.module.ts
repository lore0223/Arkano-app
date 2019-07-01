import { NgModule } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormComponent } from './pages/form/form.component';

const routes: Routes = [

  {path:'dashboard', component: DashboardComponent },
  {path: 'form',     component: FormComponent},
  {path: '**',       pathMatch: 'full', redirectTo: 'form'}


]

@NgModule({
  declarations: [],
  imports: [
     RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
