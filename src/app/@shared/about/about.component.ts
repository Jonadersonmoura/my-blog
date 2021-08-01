import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/@core/authentication/auth.service';
import { MenuService } from 'src/app/@core/service-state/menu.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  logado: boolean = false;

  constructor(private router: Router,
    private authService: AuthService,
    private menuService: MenuService) { }

  ngOnInit(): void {
    this.authService.loggedIn$.subscribe(response => {
      this.logado = response
    })
  }

  logar() {
    if (this.logado) {
      this.authService.logout()
    } else {
      this.router.navigate(['/login'])
    }
  }

  closeMenu() {
    this.menuService.setMenu(false)
  }

}
