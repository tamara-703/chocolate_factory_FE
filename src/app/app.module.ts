import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { CollectionsComponent } from './collections/collections.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { AboutComponent } from './about/about.component';
import { FetchService } from './fetch.service';
import { ImageSliderModule } from './imageSlider/imageSlider.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductsComponent,
    CollectionsComponent,
    ManufacturerComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageSliderModule
  ],
  providers: [FetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
