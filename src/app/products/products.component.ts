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
  selected: boolean = false;
  selectedId: number = 0;
  isDeletedActive = false;

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

  deleteConfirmation(id: number) {

    this.selected = true;
    this.isDeletedActive = true;
    this.selectedId = id;

  }

  deleteNotConfirmed()
  {
    this.selected = false;
    this.isDeletedActive = false;
    console.log("selected is " + this.selected)
  }

  deleteEntry(id: number) {
    this.deletedId = id;
    console.log("ID to be deleted: " + this.deletedId)
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

  ngOnDestroy(): void {

    this.subscription.unsubscribe();

  }

}
