import {Component, OnInit} from '@angular/core';
import {forkJoin, of, timer} from "rxjs";
import {ajax} from "rxjs/internal/ajax/ajax";
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-operadores-criacao-juncao',
  templateUrl: './operadores-criacao-juncao.component.html',
  styleUrls: ['./operadores-criacao-juncao.component.scss']
})
export class OperadoresCriacaoJuncaoComponent implements OnInit{
  ngOnInit(): void {
    // this.operatorForkJoin()
    this.getUsers();
  }


  constructor(private api: ApiService) {
  }

  private operatorForkJoin() {
    const http = forkJoin({
      apiLocal: ajax.getJSON('http://localhost:3000/users'),
      apiExterna: ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1')
    })

    http.subscribe(value => console.log(value))

    const httpMult = forkJoin({
      first: of(1,2,3),
      second: timer(1000),
      pro: Promise.resolve(10)
    })

    httpMult.subscribe(value => console.log(value))
  }

  getUsers(){
    this.api.getUsersForkJoin().subscribe(value => console.log(value))
  }
}
