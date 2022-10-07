import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './сomponents/main-page/main-page.component';
import { CurrencyCardComponent } from './сomponents/currency-card/currency-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatSliderModule} from "@angular/material/slider";
import {MaterialModule} from "../../material.module";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CurrencyCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
