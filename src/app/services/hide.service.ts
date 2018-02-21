import { Injectable } from '@angular/core';

@Injectable()
export class HideService {
  hide = true;
  constructor() { }
  getClass() {
    if (this.hide === true) {
      return 'glyphicon-eye-close';
    }else {
      return 'glyphicon-eye-open';
    }
  }
  changeClass() {
    this.hide = !this.hide;
    return this.hide;
  }
}
