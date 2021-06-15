import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AjiraComponent } from './ajira/ajira.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AjiraComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
