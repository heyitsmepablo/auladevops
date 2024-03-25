import { Component } from '@angular/core';
import { IconStockeeLogoBwComponent } from '../../icons/icon-stockee-logo-bw/icon-stockee-logo-bw.component';
import { InputComponent } from '../../shared/input/input.component';
import { ButtonPrimaryComponent } from '../../shared/button-primary/button-primary.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';






@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IconStockeeLogoBwComponent,InputComponent,ButtonPrimaryComponent,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  FormData!:any
  Condicao:boolean = false
  css:boolean = true
  formLogin!:FormGroup


  constructor( private formBuilder:FormBuilder ){

    this.formLogin = formBuilder.group({
      email:['pablo@pablo.com',Validators.required],
      senha:['123123123']
    })

  }



  onSubmit(){
    alert(JSON.stringify(this.formLogin.getRawValue()))
  }

}
