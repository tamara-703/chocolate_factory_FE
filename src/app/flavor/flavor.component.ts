import { Component, OnInit } from '@angular/core';

import { Flavor } from './flavor';
import { FetchApiService } from './fetch-api.service';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Chocolate } from '../products/chocolate';

@Component({
  selector: 'app-flavor',
  templateUrl: './flavor.component.html',
  styleUrls: ['./flavor.component.css']
})
export class FlavorComponent implements OnInit {

  data: Flavor[] = [];
  isCollapsed: boolean = false;
  chocolatesList: Chocolate[] = [];
  img: string = "../../assets/images/choco-icon.png";

  constructor(private service: FetchApiService) {}

  ngOnInit(): void {

    this.service.getAllFlavors().subscribe(response => {
      this.data = response;

      console.log(response);


    })

  }

  toggleCollapse(flavor: string)
  {

    this.isCollapsed = true;

    this.service.getChocolatesByFlavor(flavor).subscribe(response => {
      this.chocolatesList = response;

      console.log("Request received!");
      console.log(this.chocolatesList);
    })


  }






}
