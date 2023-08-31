import { Component } from '@angular/core';
import { Chocolate } from '../products/chocolate';
import { FetchApiService } from 'src/app/products/services/fetch-api.service';
import { Manufacturer } from '../manufacturer/manufacturer';
import { Router } from '@angular/router';
import { FormControl, FormGroup, NgControl } from '@angular/forms';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent {
  userForm = new FormGroup(
    {
      brand_name: new FormControl(''),
      quantity: new FormControl(0),
      manufacturer: new FormGroup(
        {
          manufacturer: new FormControl(''),
          manufacturerAddress: new FormControl(''),
          capacity: new FormControl(0)
        }
      )
    }
  )

  manufacturer: Manufacturer = {
    id: 0,
    manufacturer: "",
    manufacturerAddress: "",
    capacity: 0
  }

  chocolate: Chocolate = {
    brand_name: "",
    manufacturer: {
      id: 0,
      capacity: 0,
      manufacturer: "",
      manufacturerAddress: ""
    },
    quantity: 0
  }

  status: boolean = false;


  constructor(private service: FetchApiService, private router: Router) {}

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

  testSubmit(): void {
    console.log(this.userForm.value)
  }

  //routing
  goToHomepage()
  {
    this.router.navigate(["/products"]);
  }



}
