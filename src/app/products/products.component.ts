import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { FetchApiService } from 'src/app/products/services/fetch-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  data: any[] = [];
  collectionSize: number = 0;
  page: number = 1;
  pageSize: number = 0;
  subscription!: Subscription;
  deletedId: number = 0;

  constructor(private service: FetchApiService, private router: Router) {}

  //fetch data on page load
  ngOnInit(): void {

    this.subscription = this.service.fetchApi().subscribe(response => {
      this.data = response;

      console.log(this.data);

      this.collectionSize = this.data.length;
      this.pageSize = Math.ceil(this.data.length / 7);

    })

  }

  deleteEntry(id: number) {
    this.deletedId = id;
    this.service.deleteApi(this.deletedId).subscribe(response => {
      console.log(response);

      if(response)
      {
        window.location.reload();
        window.alert(`Entry ${response} deleted`);
      }
    })
  }

  //routing
  goToHomepage() : void
  {
    this.router.navigate(["/"]);
  }

  goToCreateForm() : void {
    this.router.navigate(["/new"]);
  }

  goToEditPage(id: number) {
    this.router.navigate([`/edit/${id}`]);
  }



  //implements an ngOnDestory method that will unsubscribe from the method calling the api so that we won't be calling the api when the application isn't running (this wil prevent memory leaks)
  ngOnDestroy(): void {

    this.subscription.unsubscribe();

  }

}
