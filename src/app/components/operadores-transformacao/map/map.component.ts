import {Component, OnInit} from '@angular/core';
import {from, map} from "rxjs";
import {ApiService} from "../../../service/api.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit{

  ngOnInit(): void {
    this.operatorMap()
  }


  constructor(private apiService:ApiService) {
  }

  private operatorMap() {
    const arr$ = from([
      {name: 'abc', age: 24},
      {name: 'abc', age: 24},
      {name: 'abc1', age: 24},
    ]);

    const nums$ = from([1,2,3,4,5]);

    const numsMap = nums$.pipe(
      map(source => source * 2)
    )

    // numsMap.subscribe(console.log)

    const arrMap = arr$.pipe(
      map(({name}) => name)
    )

    // arrMap.subscribe(console.log)

    this.apiService.getUserHttp().subscribe(console.log)
  }
}
