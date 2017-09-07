import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { AppComponent } from './app.component';
import { CityDetailsModule } from './city-details/city-details.module';
import { CitiesListModule } from './cities-list/cities-list.module';
import { AppRoutingModule } from './app-routing.module';
import { WeatherDetailsService } from './services/weather-details.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CityDetailsModule,
    CitiesListModule,
    UIRouterModule,
  ],
  providers: [WeatherDetailsService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
