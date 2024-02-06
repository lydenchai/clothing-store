import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockistsComponent } from './components/stockists/stockists.component';

const routes: Routes = [
  {
    path: '',
    component: StockistsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockistsRoutingModule {}
