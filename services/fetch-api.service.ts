import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchApiService {

  getApi()
  {
    console.log("API fetched");
  }


}
