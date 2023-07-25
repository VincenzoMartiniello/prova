import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subscription, concat, concatAll, forkJoin, merge, mergeAll, scan, take, takeUntil, Subject } from 'rxjs';
import { ServiceDbService } from 'src/app/service/service-db.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  start: number = 0;
  end: number = 10;
  data: string[] = [];
  // data = Array.from({length: 100}).map((_, i) => `Option ${i}`);
  options = new ReplaySubject<string[]>();
  options1: string[] = [];
  constructor(private servicedDbService: ServiceDbService) { }

  ngOnInit() {
    // this.getList();
    this.costruisciArray();
    //this.options.subscribe();
    this.getNextTen();
  }

  costruisciArray() {
    for (let i = 0; i < 100; i++) {
      this.data[i] ="Option " + i;
    }
  }

  // getList(){
  //   const subscribe1=this.servicedDbService.getLista1();
  //   const subscribe2=this.servicedDbService.getLista2();
  //   const subscribe3=this.servicedDbService.getLista3();
  // concat(subscribe1,subscribe2,subscribe3).subscribe(val => console.log(val));
  // }
  getNextTen() {
    const result = this.data.slice(this.start, this.start + this.end);
    this.options.next(result);
    this.start = this.start + this.end;
    this.accumuloArray();



  }

  accumuloArray() {
    this.options.pipe(
      scan((acc, curr) => {
        return [...acc, ...curr];
      }, [])
    )
      .subscribe(val => this.options1 = val);
    console.log(this.options1);
  }

}
