import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FetchApiService } from 'src/app/products/services/fetch-api.service';
import { Chocolate } from '../products/chocolate';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  id: number;
  data: Chocolate = {
    brand_name: "",
    manufacturer: {
      manufacturer: "",
      manufacturerAddress: "",
      capacity: 0
    },
    quantity: 0
  }
  status: boolean = false;

  constructor(private router: ActivatedRoute, private service: FetchApiService, private route: Router)
  {
    let id = this.router.snapshot.paramMap.get('id');
    this.id = Number(id);
  }

  ngOnInit(): void {

    this.service.fetchApiById(this.id).subscribe(response => {

      this.data = response;
    })

  }

  onSaveChanges() {
    console.log("ID: " + this.id);
    console.log("Data changed: " + this.data.brand_name);

    this.service.putApi(this.data, this.id).subscribe(response => {
      this.status = true;
      setTimeout(() => {
        this.route.navigate(['/products']);
      }, 2000);
    })
  }


}
