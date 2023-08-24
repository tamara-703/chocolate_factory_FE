import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router} from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { FetchApiService } from 'services/fetch-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  data: any = [];
  currentPage: number = 1;
  subscription!: Subscription;
  deletedId: number = 0;

  constructor(private service: FetchApiService, private router: Router) {}

  //fetch api on page load
  ngOnInit(): void {

    this.service.fetchApi().subscribe(response => {
      this.data = response;
      console.log(this.data);
    })

    // this.subscription = this.data;

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



  //implements an ngOnDestory method that will unsubscribe from the method calling the api so that we won't be calling the api when the application isn't running (this wil prevent memory leaks)
  // ngOnDestroy(): void {

  //   this.subscription.unsubscribe();
  //   console.log("Application closed");

  // }

}
