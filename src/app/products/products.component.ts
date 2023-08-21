import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FetchApiService } from 'services/fetch-api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  data: any[] | null = null;

  constructor(private service: FetchApiService) {}

  ngOnInit(): void {
    this.service.fetchApi().then(response => {
      this.data = response;
      console.log(this.data);
    }).catch(err => {
      console.error(err);
    })


  }

  //products will display a certain amount of products already in the database. It will have the option to allow users to add a product using a form


  //move this method to the fetchapi service and have it return the data
  // async fetchApi()
  // {
  //   let base_url: string = "https://api.thecatapi.com/v1/images/search?limit=10";

  //   let response = await fetch(base_url).then(data => {
  //     return data.json();
  //   }).catch (err => {
  //     console.error(err);
  //   })

  //   // let catList: [] = response;
  //   this.catList = response;

  //   console.log(this.catList);

  // }



}
