import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { FlavorComponent } from './flavor/flavor.component';

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
    path: 'flavors',
    component: FlavorComponent
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
  },
  {
    path: 'edit/:id',
    component: EditFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
