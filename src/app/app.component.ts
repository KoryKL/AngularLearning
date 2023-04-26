import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  options: any;

  ngOnInit() {
    this.options = {
      xAxis: {
        type: 'category',
        data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [304, 509, 102, 402, 404, 403, 408],
          type: 'line',
          smooth: true
        }
      ]
    }
  }
}
