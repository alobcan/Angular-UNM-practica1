import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { QuotesService } from './services/quotes.service';
import { MisatoComponent } from './misato/misato.component';

@NgModule({
  declarations: [
    AppComponent,
    MisatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  providers: [
    QuotesService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
