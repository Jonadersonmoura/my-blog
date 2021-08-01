import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/@core/service-state/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
  }

  openMenu() {
    this.menuService.setMenu(true)
  }

}
