import {Component, OnInit} from '@angular/core';
import {interval, Observable} from "rxjs";

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {
  ngOnInit(): void {
    this.initObservable()
  }

  private initObservable() {
    const observable = new Observable((subscriber) => {
      subscriber.next(10);
      subscriber.next('matheus');
      subscriber.next(true);
      subscriber.next({name: 'matheus'});
      subscriber.complete();
    });
    // observable.subscribe((res) => {
    //   console.log(res)
    // }, (error) => {
    //   console.log(error)
    // }, () => {
    //   console.log('completou o observable!')
    // })
    // const it = interval(1000);

    // const observer = {
    //   next: (x: any) => console.log('Observer next value' + x),
    //   error: (err: any) => console.error('Observer error' + err),
    //   complete: () => console.log('Observer complete')
    // }

    // observable.subscribe(observer);

    // const subscription = observable.subscribe(observer);
    // const subscription2 = it.subscribe(console.log);
    // setTimeout(() =>{
    //   subscription2.unsubscribe()
    // },3000)
  }
}
