/**
 * Created by admin1 on 5/22/2017.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class TabService {
  tab = 1;
  isSelected(value: number) {
    if (this.tab === value) {
      return true;
    }else {
      return false;
    }
  }
  selected(value: number) {
    this.tab = value;
  }
  incrementTab() {
    this.tab += 1;
  }
  decrementTab() {
    this.tab -= 1;
  }
}
