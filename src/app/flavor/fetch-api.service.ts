import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flavor } from './flavor';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Chocolate } from '../products/chocolate';

@Injectable({
  providedIn: 'root'
})
export class FetchApiService {

  base_url: string = environment.base_url;

  constructor(private httpService: HttpClient) { }


  getAllFlavors() : Observable<Flavor[]>
  {
    return this.httpService.get<Flavor[]>(`${this.base_url}/flavor`);
  }

  getChocolatesByFlavor(flavor: string) : Observable<Chocolate[]>
  {

    return this.httpService.get<Chocolate[]>(`${this.base_url}/chocolate/v1/flavor?flavor=${flavor}`);



  }
}
