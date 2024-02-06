import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockistsRoutingModule } from './stockists-routing.module';
import { StockistsComponent } from './components/stockists/stockists.component';

@NgModule({
  declarations: [StockistsComponent],
  imports: [CommonModule, StockistsRoutingModule],
})
export class StockistsModule {}
