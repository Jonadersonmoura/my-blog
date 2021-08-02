import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, timer } from 'rxjs';
import { MenuService } from '../service-state/menu.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class AuthService {

    private loggedIn = new BehaviorSubject<boolean>(false);

    loggedIn$ = this.loggedIn.asObservable();

    constructor(private router: Router,
        private menuService: MenuService,
        private _snackBar: MatSnackBar) {
        const sessaoLogada = JSON.parse(localStorage.getItem('logado') || '{}');
        this.loggedIn.next(sessaoLogada.login);
    }

    login(user: any) {

        if (user.usuario === 'usuario@empresa.com.br' && user.senha === 'senha01') {
            this.loggedIn.next(true);
            this.router.navigate(['']);
            this.menuService.setMenu(false);
        } else {
            this._snackBar.open('Usuário ou Senha Inválidos', 'fechar')
        }
    }

    logout() {
        this.loggedIn.next(false);
        this.menuService.setMenu(false);
        const user = { login: false }
        localStorage.setItem('logado', JSON.stringify(user));
        this.router.navigate(['/posts']);
    }
}