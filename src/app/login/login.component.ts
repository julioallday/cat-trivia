import { LocalStorageService } from './../shared/services/local-storage.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}
  login(event: any) {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=[\]{};':"\|,.<>/?]).{8,}$/;
    const user = event.target.parentNode[0].value;
    const password = event.target.parentNode[1].value;
    const passwordConfirmation = event.target.parentNode[2].value;
    const passwordsMatch = password === passwordConfirmation;
    const regexTest = passwordRegex.test(password);

    if (passwordsMatch && regexTest) {
      this.localStorageService.SetStorage('access', 'userAuthenticated');

      setTimeout(() => this.router.navigate(['home']), 1000);

      console.log(`Usuário ${user} logado com sucesso`);
    } else if (passwordsMatch && !regexTest) {
      console.log(
        `A senha precisa ter ao menos 1 letra maiuscula, 1 minúscula, 1 caracter especial e 1 numero de 0 a 9, tente novamente`
      );
    } else if (!passwordsMatch && regexTest) {
      console.log('Confirme a senha e tente novamente.');
    }
  }
}
