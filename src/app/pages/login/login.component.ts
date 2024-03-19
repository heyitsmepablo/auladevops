import { Component } from '@angular/core';
import { IconStockeeLogoBwComponent } from '../../icons/icon-stockee-logo-bw/icon-stockee-logo-bw.component';
import { InputComponent } from '../../shared/input/input.component';
import { ButtonPrimaryComponent } from '../../shared/button-primary/button-primary.component';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IconStockeeLogoBwComponent,InputComponent,ButtonPrimaryComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
