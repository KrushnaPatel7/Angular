import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { CitiesChildComponent } from './cities-child/cities-child.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    CitiesChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
