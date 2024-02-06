import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./routes/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'shop',
        loadChildren: () =>
          import('./routes/shop/shop.module').then((m) => m.ShopModule),
      },
      {
        path: 'sale',
        loadChildren: () =>
          import('./routes/sale/sale.module').then((m) => m.SaleModule),
      },
      {
        path: 'customer-care',
        loadChildren: () =>
          import('./routes/customer-care/customer-care.module').then(
            (m) => m.CustomerCareModule,
          ),
      },
      {
        path: 'stockists',
        loadChildren: () =>
          import('./routes/stockists/stockists.module').then(
            (m) => m.StockistsModule,
          ),
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
