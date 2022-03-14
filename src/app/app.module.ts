import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { HeaderTitleComponent } from './header-title/header-title.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewPucksComponent } from './view-pucks/view-pucks.component';
import {MaterialModule} from "./material-module/material.module";
import { DataPucksComponent } from './data-pucks/data-pucks.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopMenuComponent,
    HeaderTitleComponent,
    ViewPucksComponent,
    DataPucksComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
