import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/@core/service-state/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  opened: boolean = false;

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.menuOpen$.subscribe(response => {
      this.opened = response
    })
  }

}
