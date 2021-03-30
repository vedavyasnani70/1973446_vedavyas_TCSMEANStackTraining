import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TrackerService {

  constructor(public http:HttpClient) { }

  storeTask(tas:any){
    this.http.post("http://localhost:3000/task",tas).
    subscribe(result=>console.log(result),error=>console.log(error));
  }
}
