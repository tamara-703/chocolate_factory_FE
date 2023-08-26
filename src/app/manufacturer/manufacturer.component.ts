import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Manufacturer } from './manufacturer';
import { FetchApiService } from './fetch-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.css']
})
export class ManufacturerComponent implements OnInit {

  data: Manufacturer[] = [];
  collectionSize: number = 0;
  page: number = 1;
  pageSize: number = 0;
  manufacturer: string = "";
  id: number = 0;

  constructor(private service: FetchApiService, private router: Router) {
  }

  ngOnInit(): void {
    this.service.getAllManufacturers().subscribe(response => {
      this.data = response;

      console.log(this.data);

      this.collectionSize = this.data.length;
      this.pageSize = Math.ceil(this.data.length / 10);

    })
  }

  //routing
  goToEditPage(manufacturerName: string)
  {
    this.manufacturer = manufacturerName;

    for(let i = 0; i < this.data.length; i++)
    {
      if(this.data[i].manufacturer === this.manufacturer)
      {
        this.id = this.data[i].id;
      }
    }

    this.router.navigate([`manufacturer/edit/${this.id}`]);
  }



}
