import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ManufacturerComponent } from '../manufacturer.component';
import { EditManufacturerFormComponent } from '../edit-manufacturer-form/edit-manufacturer-form.component';

const routes : Routes = [
  {
    path: 'manufacturer',
    component: ManufacturerComponent
  },
  {
    path: 'manufacturer/edit/:manufacturer',
    component: EditManufacturerFormComponent
  }
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
