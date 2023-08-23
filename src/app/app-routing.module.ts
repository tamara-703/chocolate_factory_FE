import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { CollectionsComponent } from './collections/collections.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateFormComponent } from './create-form/create-form.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'manufacturer',
    component: ManufacturerComponent
  },
  {
    path: 'collections',
    component: CollectionsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'manufacturer',
    component: ManufacturerComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }, //redirect path
  {
    path: 'new',
    component: CreateFormComponent
  }
  // {
  //   path: '*',

  // } //TODO : create a page not found 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
