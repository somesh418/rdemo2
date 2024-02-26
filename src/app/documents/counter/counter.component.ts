import { Component, OnInit } from '@angular/core';
import { ShareserviceService } from 'src/app/services/shareservice.service';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor(public shared: ShareserviceService) { }

  public counterArr: any = [
    { count: 4 },
    { count: 20 },
    { count: 3 },
    { count: 16 },
    { count: 2 }
  ];

  /*Add counter*/
  addCounter() {
    this.counterArr.push({ count: 0 });
    this.shared.setData(this.counterArr.length);
  }


  /*Reset All */
  resetAll() {
    this.counterArr = [];
    this.shared.setData(this.counterArr.length);
  }

  /*Counter Action  */
  counterActions(typ: string, idx: number) {
    if (typ == 'INC') { // Increment count
      this.counterArr[idx].count += 1;
    }
    else if (typ == 'DEC') { // Decrement count
      this.counterArr[idx].count -= 1;
    }
    else if (typ == 'DEL') { //Delete record
      this.counterArr.splice(idx, 1);
      this.shared.setData(this.counterArr.length);
    }
  }

  ngOnInit(): void {
    this.shared.setData(this.counterArr.length);
  }

}
