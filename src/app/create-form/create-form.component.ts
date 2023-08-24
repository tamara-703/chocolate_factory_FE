import { Component } from '@angular/core';
import { Chocolate } from '../interfaces/chocolate';
import { FetchApiService } from 'src/app/products/services/fetch-api.service';
import { Manufacturer } from '../manufacturer/manufacturer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent {

  //POST request will be here

  manufacturer: Manufacturer = {
    manufacturer: "",
    manufacturerAddress: "",
    capacity: 0
  }

  chocolate: Chocolate = {
    brand_name: "",
    manufacturer: {
      capacity: 0,
      manufacturer: "",
      manufacturerAddress: ""
    },
    quantity: 0
  }

  status: boolean = false;


  constructor(private service: FetchApiService, private router: Router) {}


  //with (click), status is turned to true and the h1 element appears.
    //pros: h1 element to proceed back to the products page appears after clicking submit
    //cons: with each click, a form is registered, so instead of having one reeses after submission for ex, i get as many as i click on the form elements
  //with (onsubmit), status remains false and the h1 element does not appear
    //pros: one single form is submitted to the database after the submit button is clicked
    //cons: h1 element doesn't appear after clicking submit, so no confirmation for user that an item has been created
  submitForm() : void {
    event?.preventDefault();
    console.log("form submitted");

    if(this.chocolate != null)
    {
      this.service.postApi(this.chocolate).subscribe(data => {
        this.status = true;
      })
    }




  }

  //routing
  goToHomepage()
  {
    this.router.navigate(["/products"]);
  }



}
