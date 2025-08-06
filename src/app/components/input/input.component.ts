import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [CommonModule],
  templateUrl: './input.component.html',
})
export class InputComponent {
  @Input() label = '';
  @Input() name = '';
  @Input() placeholder = '';
  @Input() type: 'text' | 'email' | 'password' = 'text';

  showPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
