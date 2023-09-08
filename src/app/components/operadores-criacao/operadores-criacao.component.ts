import {Component, OnInit} from '@angular/core';
import {from} from "rxjs";

@Component({
  selector: 'app-operadores-criacao',
  templateUrl: './operadores-criacao.component.html',
  styleUrls: ['./operadores-criacao.component.scss']
})
export class OperadoresCriacaoComponent implements OnInit{

  ngOnInit(): void {
    this.operatorFrom();
  }

  private operatorFrom() {
    const arr = from([1,2,3,4,5])
    const promise = from(new Promise(resolve => resolve('Hello World')))

    const string = from('Olá mundo')

    arr.subscribe(value => console.log(value));
    promise.subscribe(res => console.log(res))
    string.subscribe(res => console.log(res))
  }
}
