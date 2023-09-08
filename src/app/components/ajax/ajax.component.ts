import {Component, OnInit} from '@angular/core';
import {ajax} from "rxjs/internal/ajax/ajax";
import {catchError, of} from "rxjs";

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.scss']
})
export class AjaxComponent implements OnInit{

  users: any[] = [];
  ngOnInit(): void {
    this.operatorAjax();
  }

  private operatorAjax() {
    const http = ajax.getJSON('http://localhost:3000/users')
      .pipe(
        catchError(error => {
          console.log(error)
          return of(error)
        }, )
      )

    http.subscribe((value: any[]) => {
      this.users = value
    })
  }
}
