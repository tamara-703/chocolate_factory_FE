import { Component, OnInit } from '@angular/core';
import { Manufacturer } from '../manufacturer';
import { FetchApiService } from '../fetch-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-manufacturer-form',
  templateUrl: './edit-manufacturer-form.component.html',
  styleUrls: ['./edit-manufacturer-form.component.css']
})
export class EditManufacturerFormComponent implements OnInit{

  data: Manufacturer = {
    manufacturer: "",
    manufacturerAddress: "",
    capacity: 0
  }
  manufacturerName: string;
  status: boolean = false;

  constructor(private service: FetchApiService, private path: ActivatedRoute, private router: Router) {

    let routePath = this.path.snapshot.paramMap.get('manufacturer');
    this.manufacturerName = String(routePath);

  }

  ngOnInit(): void {
    this.service.getManufacturerByName(this.manufacturerName).subscribe(response => {
      this.data = response;

      console.log("Manufacturer name: " + this.manufacturerName);

    })
  }

  onSaveChanges()
  {
    this.service.editManufacturer(this.manufacturerName, this.data).subscribe(response => {
      console.log("Data Changed success ");

      this.status = true;

      setTimeout(()=> {

        this.router.navigate(['/manufacturer']);

      },2000)
    })
  }

}
