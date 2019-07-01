import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormComponent } from './pages/form/form.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './pages/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DashboardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
