import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CartAddComponent } from './cart-add/cart-add.component';
import { CartListComponent } from './cart-list/cart-list.component';

@NgModule({
  declarations: [AppComponent, CartAddComponent, CartListComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
