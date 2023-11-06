import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VehiclesModule } from './vehicles/vehicles.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VehiclesModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
