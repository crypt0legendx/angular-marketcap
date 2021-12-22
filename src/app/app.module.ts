import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { HttpModule } from '@angular/http';
// import { GotHttpService } from './gotHttpService';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgApexchartsModule,
    HttpClientModule,
    HttpModule,
  ],
  providers: [
    // GotHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
