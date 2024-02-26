import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LimitToPipe } from './pipes/limit-to.pipe';
import { CounterComponent } from './documents/counter/counter.component';
import { WeatherComponent } from './documents/weather/weather.component';
import { HeaderComponent } from './documents/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    WeatherComponent,
    LimitToPipe,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
