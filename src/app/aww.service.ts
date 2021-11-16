import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AwwService {

  constructor(private http:HttpClient) { }

  apiUrl: string = 'https://www.reddit.com/r/aww/.json';

  getAww():any {
    return this.http.get(this.apiUrl);
  }
}
