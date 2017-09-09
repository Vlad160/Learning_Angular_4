import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DateDetailsComponent } from './date-details.component';

@NgModule({

  imports: [CommonModule],
  providers: [DatePipe],
  declarations: [DateDetailsComponent],
  exports: [DateDetailsComponent],

})

export class DateDetailsModule {
}

