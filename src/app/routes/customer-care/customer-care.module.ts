import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerCareRoutingModule } from './customer-care-routing.module';
import { CustomerCareComponent } from './components/customer-care/customer-care.component';

@NgModule({
  declarations: [CustomerCareComponent],
  imports: [CommonModule, CustomerCareRoutingModule],
})
export class CustomerCareModule {}
