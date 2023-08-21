import { Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchApiService {

  private base_url: string;

  constructor() {
    this.base_url =  "http://localhost:8080"//base url: http:localhost:8080
    //"https://api.thecatapi.com/v1/images/search?limit=10";
    //then add paths using template literals
  }

  fetchApi(): Promise<any[]>
  {
    return new Promise<any[]>((resolve, reject) => {
      setTimeout(()=> {
        const response = fetch(`${this.base_url}/chocolate/v1`).then(data => {
          return data.json();
        }).catch(err => {
          console.error(err);
        })

        resolve(response);

      }, 1000)
    })
  }


}
