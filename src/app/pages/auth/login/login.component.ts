import { Component } from '@angular/core';
import { AuthBannerComponent } from '../../../components/auth-banner/auth-banner.component';
import { CardComponent } from '../../../components/card/card.component';
import { InputComponent } from '../../../components/input/input.component';
import { ButtonComponent } from '../../../components/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    AuthBannerComponent,
    CardComponent,
    InputComponent,
    ButtonComponent,
    RouterLink,
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent {}
