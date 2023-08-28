import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgbModule, NgbPagination, NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { AboutComponent } from './about/about.component';
import { FetchApiService } from 'src/app/products/services/fetch-api.service';
import { ImageSliderModule } from './imageSlider/imageSlider.module';
import { PaginationModule } from 'pagination/pagination.module';
import { CreateFormComponent } from './create-form/create-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { ManufacturerRoutingModule } from './manufacturer/routing/routing.module';
import { EditManufacturerFormComponent } from './manufacturer/edit-manufacturer-form/edit-manufacturer-form.component';
import { FlavorComponent } from './flavor/flavor.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductsComponent,
    ManufacturerComponent,
    AboutComponent,
    CreateFormComponent,
    EditFormComponent,
    EditManufacturerFormComponent,
    FlavorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageSliderModule,
    HttpClientModule,
    PaginationModule,
    FormsModule,
    ReactiveFormsModule,
    InMemoryWebApiModule,
    ManufacturerRoutingModule,
    NgbModule,
    NgbPagination
  ],
  providers: [FetchApiService, NgbCollapse],
  bootstrap: [AppComponent]
})
export class AppModule { }
