import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import { FetchApiService } from 'services/fetch-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  data: any = [];
  currentPage: number = 1;

  constructor(private service: FetchApiService, private router: Router) {}

  //fetch api on page load
  ngOnInit(): void {

    this.service.fetchApi().subscribe(response => {
      this.data = response;
      console.log(this.data);
    })

  }








  changePage(page: number) :void {

    //assign the currentPage to the page clicked
    this.currentPage = page;

  }

  //routing
  goToHomepage() : void
  {
    this.router.navigate(["/"]);
  }

  addProduct() : void
  {
    //routes to page where form is
  }

  goToCreateForm() : void {
    this.router.navigate(["/new"]);
  }

  //products will display a certain amount of products already in the database. It will have the option to allow users to add a product using a form



}
