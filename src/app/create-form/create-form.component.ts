import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
  incomingData: Chocolate[] = [];
  foundMatch: string = "some value";


  constructor(private service: FetchApiService, private router: Router) {
    service.fetchApi().subscribe(response => {

      this.incomingData = response;
      console.log(this.incomingData);

    })
  }

  checkTypeMismatch(event: any)
  {
    console.log(event.currentTarget.value);
    for(let i = 0; i < this.incomingData.length; i++)
    {
      if(this.incomingData[i].brand_name === event.currentTarget.value || this.incomingData[i].manufacturer.manufacturer === event.currentTarget.value || this.incomingData[i].manufacturer.manufacturerAddress === event.currentTarget.value)
      {
        this.foundMatch = event.currentTarget.value;
        console.log("Found a match!");
      }
    }
  }

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
