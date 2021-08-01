import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/@core/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin;

  constructor(private fb: FormBuilder,
    private authService: AuthService) {
    this.formLogin = this.fb.group({
      usuario: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required]]
    })
  }

  ngOnInit(): void {

  }

  logar() {
    this.authService.login(this.formLogin.value)
  }

}
