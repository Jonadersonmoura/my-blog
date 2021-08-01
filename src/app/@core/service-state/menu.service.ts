import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuOpen = new BehaviorSubject<boolean>(false);

  menuOpen$ = this.menuOpen.asObservable()

  constructor() { }

  setMenu(state: boolean) {
    this.menuOpen.next(state)
  }

}
