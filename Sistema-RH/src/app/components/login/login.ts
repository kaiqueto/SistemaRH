import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {  } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

  minMaxRules = false;
  numberRules = false;
  letterRules = false;
  upperCaseRules = false;
  specialCharRules = false;

  form = new FormGroup({ 
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.pattern(this.passwordRegex)]),
 })

  onSubmit(){
    if(this.form.valid)
      alert("Formulário válido");
    else
      alert("Formulário inválido");


    console.log(this.form.value);
  }

  validatePassword(){
    const password = this.form.get('senha')?.value;
    if(password){
      this.minMaxRules = password.length >= 8 && password.length <= 16;
      this.numberRules = /\d/.test(password);
      this.letterRules = /[a-zA-Z]/.test(password);
      this.upperCaseRules = /[A-Z]/.test(password);
      this.specialCharRules = /[@$!%*?&]/.test(password);
    }

  }
  
}
