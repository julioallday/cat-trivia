import { LocalStorageService } from './../shared/services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  data = {
    login: '',
    password: '',
    passwordConfirmation: '',
  };
  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}
  ngOnInit(): void {}

  login() {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=[\]{};':"\|,.<>/?]).{8,}$/;
    const user = this.data.login;
    const password = this.data.password;
    const passwordConfirmation = this.data.passwordConfirmation;
    const passwordsMatch = password === passwordConfirmation;
    const regexTest = passwordRegex.test(password);

    this.verifyPasswordMatch(passwordsMatch, regexTest);
  }
  verifyPasswordMatch(passwordsMatch: boolean, regexTest: boolean) {
    if (passwordsMatch && regexTest) {
      this.localStorageService.SetStorage('access', 'userAuthenticated');
      setTimeout(() => this.router.navigate(['home']), 1000);
      console.log(`Usuário logado com sucesso`);
    } else if (passwordsMatch && !regexTest) {
      console.log(
        `A senha precisa ter ao menos 1 letra maiuscula, 1 minúscula, 1 caracter especial e 1 numero de 0 a 9, tente novamente`
      );
    } else if (!passwordsMatch && regexTest) {
      console.log('Confirme a senha e tente novamente.');
    }
  }
}
