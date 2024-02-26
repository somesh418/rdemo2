import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareserviceService {

  constructor() { }
  public data: any;
  /*set counter value */
  setData(value: any) {
    this.data = value;
  }
   /*get counter value */
  getData() {
    return this.data;
  }
}
