import {Component, OnInit} from '@angular/core';
import {Observable, Observer, of} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-ob-rx',
  templateUrl: './ob-rx.component.html',
  styleUrls: ['./ob-rx.component.css']
})

export class ObRxComponent implements OnInit {
  // constructor() {
  // }

  sequence = new Observable(this.sequenceSubscriber);
  res = 0;

  sequenceSubscriber(observer: Observer<any>) {
    // 每隔一秒钟写入一个数
    let x = 0;
    setInterval(
      () => {
        x++;
        observer.next(x);
      }, 1000
    );

    return {
      unsubscribe() {
      }
    };
  }

  // 让 x 绑定到数据流
  ngOnInit(): void {
    this.sequence.subscribe({
      next: (num) => {
        // console.log(num);
        console.log(num);

      },

      // next: (num) => {
      //   this.res = x;
      //
      // },
      complete: () => {
        console.log('数据流结束。');
      }
    });
  }

  // myObservable: Observable<number> = of(1, 2, 3);
  // observer1: Observer<number> = {
  //   next: x => console.log('可观察对象获得一个next值：' + x),
  //   error: err => console.log('可观察对象发生错误：' + err),
  //   complete: () => console.log('可观察对象获得一个完成通知。')
  // };

  // ngOnInit(): void {
  //   this.myObservable.subscribe(this.observer1);
  // }
}
