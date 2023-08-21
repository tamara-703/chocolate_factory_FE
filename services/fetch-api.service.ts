import { Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchApiService {

  private base_url: string;

  constructor() {
    this.base_url = "https://api.thecatapi.com/v1/images/search?limit=10"; //base url: http:localhost:8080
    //then add paths using template literals
  }

  // async getApi(): Promise<any[]>
  // {
  //   let response = await fetch(this.base_url).then(data => {
  //     return data.json();
  //   }).catch (err => {
  //     console.error(err);
  //   })

  //   console.log("API fetched");

  //   return response;
  // }

  fetchApi(): Promise<any[]>
  {
    return new Promise<any[]>((resolve, reject) => {
      setTimeout(()=> {
        const response = fetch(this.base_url).then(data => {
          return data.json();
        }).catch(err => {
          console.error(err);
        })

        resolve(response);

      }, 1000)
    })
  }


}
