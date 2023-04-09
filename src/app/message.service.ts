import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = []; // 保存所有 信息
  add(message: string) { // 新增一条日志
    this.messages.push(message);
  }

  // 清空所有日志
  clear(): void {
    this.messages = [];
  }

  constructor() {
  }
}
