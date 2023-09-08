import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit{

  ngOnInit(): void {
    this.operatorInterval()
  }

  private operatorInterval() {
    const num = interval(2000)

    const subscription = num.subscribe(value => console.log(value));

    setTimeout( ()=> {
      subscription.unsubscribe();
    },6000)
  }
}
