import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ManufacturerComponent } from '../manufacturer.component';

const routes : Routes = [
  {
    path: 'manufacturer',
    component: ManufacturerComponent
  },
  // {
  //   path: 'manufacturer/new'
  //   //component
  // },
  // {
  //   path: 'manufacturer/edit/:id'
  //   //component
  // }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ManufacturerRoutingModule { }
