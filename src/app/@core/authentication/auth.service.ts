import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class AuthService {
    private loggedIn = new BehaviorSubject<boolean>(false);

    loggedIn$ = this.loggedIn.asObservable();

    constructor(private router: Router) { }

    login(user: any) {
        if (user.usuario === 'usuario@empresa.com.br' && user.senha === 'senha01') {
            this.loggedIn.next(true);
            this.router.navigate(['/home']);
        } else {
            throw new Error('Usuário ou Senha Inválidos');
        }
    }

    logout() {
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
    }
}