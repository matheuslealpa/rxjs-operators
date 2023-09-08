import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  ngOnInit() {
    this.initSubject()
  }

  private initSubject() {
    // const subject = new Subject<number>();
    // const subject2 = new BehaviorSubject(0);
    //
    // console.log(subject2)
    //
    // subject2.subscribe({
    //     next: (subject: any) => {
    //       console.log(subject)
    //     },
    //     error: (err) => {
    //       console.log(err)
    //     },
    //   }
    // )
    //
    // subject2.next(30)
    // subject2.next(32)


  }
}
