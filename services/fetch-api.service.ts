import { Injectable, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Chocolate } from 'src/app/interfaces/chocolate';

@Injectable({
  providedIn: 'root'
})
//NOTE: create two other service that would individually fetch the manufacturer and flavor api instead of having them here
export class FetchApiService {

  //abstract this string to a higher config file. Move this to a environment config file
  base_url: string = "http://localhost:8080" ?? "https://api.thecatapi.com/v1/images/search?limit=10";

  url: string = environment.base_url; //imported from environment, use this for later requests

  id: number = 0;

  constructor(private httpService: HttpClient) { }

  //GET
  fetchApi() : Observable<Object>{
    //GET

    return this.httpService.get(`${this.base_url}/chocolate/v1`);
  }

  //POST
  postApi(chocoBody: Chocolate) : Observable<Chocolate> {

    //not sure if i want any headers. Check the headers next time a response comes in
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json'
    // })

    console.log("Request body received");

    return this.httpService.post<Chocolate>(`${this.base_url}/chocolate/v1`, chocoBody);

  }

  //PUT

  //DELETE
  deleteApi(id: number) : Observable<Chocolate>  {

    this.id = id;
    console.log("in delete");
    console.log(this.id);

    return this.httpService.delete<Chocolate>(`${this.base_url}/chocolate/v1/${this.id}`);




  }


}
