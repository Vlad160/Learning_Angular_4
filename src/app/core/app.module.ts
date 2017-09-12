import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { AppComponent } from './app.component';
import { CitiesListModule } from './cities-list/cities-list.module';
import { DatePipe } from '@angular/common';
import { UIRouterModule } from '@uirouter/angular';
import { APP_STATES } from './app.states';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CitiesListModule,
    UIRouterModule.forRoot({
      states: APP_STATES,
      otherwise: '/',
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
