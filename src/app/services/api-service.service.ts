import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(public http: HttpClient) { }

  getAPIData(params: any): Observable<any> {
    return this.http.get(params);
  }

}
