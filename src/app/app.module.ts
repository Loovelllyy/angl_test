import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatSliderModule} from "@angular/material/slider";
import {MaterialModule} from "../../material.module";
import { HeaderComponent } from './components/header/header.component';
import { UserHelloComponent } from './components/header/user-hello/user-hello.component';
import { SearchComponentComponent } from './components/header/search-component/search-component.component';
import {FormsModule} from "@angular/forms";
import { ShortProfileComponent } from './components/header/short-profile/short-profile.component';
import { CoinCardComponent } from './components/coin-card/coin-card.component';
import {HttpClientModule} from "@angular/common/http";
import { MarketComponentComponent } from './components/market-component/market-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    UserHelloComponent,
    SearchComponentComponent,
    ShortProfileComponent,
    CoinCardComponent,
    MarketComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
