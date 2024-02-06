import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleRoutingModule } from './sale-routing.module';
import { SaleComponent } from './components/sale/sale.component';

@NgModule({
  declarations: [SaleComponent],
  imports: [CommonModule, SaleRoutingModule],
})
export class SaleModule {}
