import { DataService } from './data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  keyword = 'PChome';
  data: any;

  constructor(private datasvc: DataService) {
    this.datasvc.load().subscribe(result => {
      this.data = result;
    });
  }

  doSearch(str): void {
    this.keyword = str;
  }
}
