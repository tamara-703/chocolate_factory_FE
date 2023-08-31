import { Injectable, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Chocolate } from 'src/app/products/chocolate';

@Injectable({
  providedIn: 'root'
})

export class FetchApiService {

  base_url: string = environment.base_url; 

  id: number = 0;

  constructor(private httpService: HttpClient) { }

  //GET
  fetchApi() : Observable<Chocolate[]>{

    return this.httpService.get<Chocolate[]>(`${this.base_url}/chocolate/v1`);
  }

  //GET BY ID
  fetchApiById(id: number) : Observable<Chocolate>
  {
    console.log("Getting ID from edit page: " + id);
    return this.httpService.get<Chocolate>(`${this.base_url}/chocolate/v1/${id}`);
  }

  //POST
  postApi(chocoBody: Chocolate) : Observable<Chocolate> {

    console.log("Request body received");

    return this.httpService.post<Chocolate>(`${this.base_url}/chocolate/v1`, chocoBody);

  }

  //PUT
  putApi(chocoBody: Chocolate, id: number) : Observable<Chocolate>
  {

    console.log("Request to edit sent!");

    return this.httpService.put<Chocolate>(`${this.base_url}/chocolate/v1/${id}`, chocoBody);

  }

  //DELETE
  deleteApi(id: number) : Observable<Chocolate>  {

    this.id = id;
    console.log("in delete");
    console.log(this.id);

    return this.httpService.delete<Chocolate>(`${this.base_url}/chocolate/v1/${this.id}`);




  }


}
