import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Manufacturer } from './manufacturer';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FetchApiService {

  base_url: string = environment.base_url;
  status: boolean = false;

  constructor(private httpService: HttpClient) { }

  getAllManufacturers() : Observable<Manufacturer[]>
  {
    return this.httpService.get<Manufacturer[]>(`${this.base_url}/manufacturer`);

  }

  getManufacturerByName(manufacturer: string) : Observable<Manufacturer>
  {
    return this.httpService.get<Manufacturer>(`${this.base_url}/manufacturer/${manufacturer}`);
  }

  editManufacturer(manufacturer: string, manufacturerBody: Manufacturer): Observable<Manufacturer>
  {

    return this.httpService.put<Manufacturer>(`${this.base_url}/manufacturer/${manufacturer}`, manufacturerBody);




  }
}
