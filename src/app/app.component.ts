import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loading: boolean = true;
  mode: string = 'indeterminate';
  value: number;
  maxCap: number = 1e7;
  raised: number;

  setPercent(percent) {
    this.raised = percent * this.maxCap * 1e-2;
    this.value = percent;
  }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
      this.mode = 'determinate';
      this.setPercent(61.8034);
    }, 1e3);
  }
}
