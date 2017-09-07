import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StateService, UIRouterModule } from '@uirouter/angular';
import { AppComponent } from './app.component';
import { CityDetailsModule } from './city-details/city-details.module';
import { CitiesListModule } from './cities-list/cities-list.module';
import { AppRoutingModule } from './app-routing.module';

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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
