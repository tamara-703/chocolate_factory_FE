import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductsComponent } from './products/products.component';
import { CollectionsComponent } from './collections/collections.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { AboutComponent } from './about/about.component';
import { FetchService } from './fetch.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomepageComponent,
    ProductsComponent,
    CollectionsComponent,
    ManufacturerComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
