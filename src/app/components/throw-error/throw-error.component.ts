import {Component, OnInit} from '@angular/core';
import {throwError} from "rxjs";

@Component({
  selector: 'app-throw-error',
  templateUrl: './throw-error.component.html',
  styleUrls: ['./throw-error.component.scss']
})
export class ThrowErrorComponent implements OnInit{

  ngOnInit(): void {
    this.operatorThrowError();
  }

  private operatorThrowError() {
    const err = throwError('Sou o error!');
    err.subscribe(value => console.log(value),
      (error) => {
      console.error('ERROR', error)
      })
  }
}
