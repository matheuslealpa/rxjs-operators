import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-merge-concat',
  templateUrl: './merge-concat.component.html',
  styleUrls: ['./merge-concat.component.scss']
})
export class MergeConcatComponent implements OnInit{


  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    // this.getUsersMerger();
    this.getUsersConcat();
  }

  private getUsersMerger() {
    this.apiService.getUsersMerger().subscribe(console.log)
  }

  private getUsersConcat() {
    this.apiService.getUsersConcat().subscribe(console.log)
  }
}
