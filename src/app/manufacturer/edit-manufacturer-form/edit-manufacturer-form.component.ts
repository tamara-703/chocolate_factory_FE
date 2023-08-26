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
    id: 0,
    manufacturer: "",
    manufacturerAddress: "",
    capacity: 0
  }
  id: number;
  status: boolean = false;

  constructor(private service: FetchApiService, private path: ActivatedRoute, private router: Router) {

    let routePath = this.path.snapshot.paramMap.get('manufacturer');
    this.id = Number(routePath);

  }

  ngOnInit(): void {
    this.service.getManufacturerByName(this.id).subscribe(response => {
      console.log(response);
      this.data = response;
    })
  }

  onSaveChanges()
  {
    if(this.data)
    {
      this.service.editManufacturer(this.id, this.data).subscribe(response => {
        console.log("Data Changed success ");
        console.log(response);
        this.status = true;

        setTimeout(()=> {

          this.router.navigate(['/manufacturer']);

        },2000)
      })
    }
  }

}
