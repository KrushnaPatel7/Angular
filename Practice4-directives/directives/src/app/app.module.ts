import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DirectivesExampleComponent } from './directives-example/directives-example.component';
import { UppercaseDirective } from './uppercase.directive';

@NgModule({
  declarations: [AppComponent, DirectivesExampleComponent, UppercaseDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
