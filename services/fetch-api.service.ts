import { Injectable, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchApiService {

  base_url: string = "http://localhost:8080" ?? "https://api.thecatapi.com/v1/images/search?limit=10";
  status: boolean = false;

  constructor(private httpService: HttpClient) {
    // this.base_url = "http://localhost:8080"//base url: http:localhost:8080
    //"https://api.thecatapi.com/v1/images/search?limit=10";
    //then add paths using template literals
  }

  // fetchApi(): Promise<any[]>
  // {
  //   return new Promise<any[]>((resolve, reject) => {
  //     setTimeout(()=> {
  //       const response = fetch(`${this.base_url}/chocolate/v1`).then(data => {
  //         return data.json();
  //       }).catch(err => {
  //         console.error(err);
  //       })

  //       resolve(response);

  //     }, 1000)
  //   })
  // }

  //a better way to do this is to create an interface for my database.
  //GET
  fetchApi() : Observable<Object>{
    //GET

    return this.httpService.get(`${this.base_url}/chocolate/v1`);
  }

  //POST
  postApi(requestBody: Object) : boolean {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })

    console.log("Request body received");
    console.log(requestBody);
    console.log(this.status);

    this.httpService.post(`${this.base_url}/chocolate/v1`, requestBody).subscribe ((data) =>
    {
      console.log("Request received");
      console.log(data);

      this.status = true;
    })

    console.log("after");
    console.log(this.status);

    return this.status;

  }


}
