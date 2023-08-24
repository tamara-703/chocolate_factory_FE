import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Manufacturer } from './manufacturer';
import { Chocolate } from '../interfaces/chocolate';
import { FetchApiService } from './fetch-api.service';

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

  constructor(private service: FetchApiService) {}

  ngOnInit(): void {
    this.service.getAllManufacturers().subscribe(response => {
      this.data = response;

      console.log(this.data);

      this.collectionSize = this.data.length;
      this.pageSize = Math.ceil(this.data.length / 10);

    })
  }



}
