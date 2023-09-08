import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.scss']
})
export class ZipComponent implements OnInit {


  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.getUsersZip();
  }


  private getUsersZip() {
    this.apiService.getUserZip().subscribe(value => console.log(value))
  }
}
