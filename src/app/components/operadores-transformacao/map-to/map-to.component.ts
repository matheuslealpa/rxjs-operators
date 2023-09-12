import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../service/api.service";
import {fromEvent, mapTo} from "rxjs";

@Component({
  selector: 'app-map-to',
  templateUrl: './map-to.component.html',
  styleUrls: ['./map-to.component.scss']
})
export class MapToComponent implements OnInit{


  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.operatorMapTo();
  }

  private operatorMapTo() {
    const click = fromEvent(document, 'click');

    const mapTo$ = click.pipe(mapTo('Hello World!'))

    mapTo$.subscribe(console.log)
  }
}
