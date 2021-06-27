import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    // FormControl,
    // FormBuilder,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatInputModule

  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
