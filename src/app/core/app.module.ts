import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { AppComponent } from './app.component';
import { CityDetailsModule } from './city-details/city-details.module';
import { CitiesListModule } from './cities-list/cities-list.module';
import { DatePipe } from '@angular/common';
import { UIRouterModule } from '@uirouter/angular';
import { APP_STATES } from './app.states';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CityDetailsModule,
    CitiesListModule,
    UIRouterModule.forRoot({
      states: APP_STATES,
      otherwise: '/cities',
      useHash: false
    }),
  ],
  providers: [
    DatePipe,
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
  ],
  bootstrap:
    [AppComponent],
})

export class AppModule {
}
