import {Component, OnInit} from '@angular/core';
import {of} from "rxjs";

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss']
})
export class OfComponent implements OnInit{

  ngOnInit(): void {
    this.operatorOf()
  }

  private operatorOf() {
    // const arr = of([1,2,3,4,5])

    const string = of('Olá mundo!');

    const multValue = of({name: 'Matheus'}, true, function showName() {return 'Matheus'})

    // arr.subscribe(value => console.log(value))

    multValue.subscribe(value => console.log(value))

    string.subscribe(value => console.log(value))
  }
}
