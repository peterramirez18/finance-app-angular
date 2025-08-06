import { Component } from '@angular/core';
import { AuthBannerComponent } from '../../../components/auth-banner/auth-banner.component';
import { CardComponent } from '../../../components/card/card.component';
import { InputComponent } from '../../../components/input/input.component';
import { ButtonComponent } from '../../../components/button/button.component';

@Component({
  selector: 'app-register',
  imports: [
    AuthBannerComponent,
    CardComponent,
    InputComponent,
    ButtonComponent,
  ],
  templateUrl: './register.component.html',
})
export class RegisterComponent {}
