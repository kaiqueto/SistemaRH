import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

  minMaxRules = false;
  numberRules = false;
  letterRules = false;
  upperCaseRules = false;
  specialCharRules = false;

  form = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.pattern(this.passwordRegex)]),
    confirmarSenha: new FormControl('', [Validators.required, Validators.pattern(this.passwordRegex)]),
  })

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

  onSubmit(){
    if(this.form.valid)
      alert("Formulário válido");
    else
      alert("Formulário inválido");


    console.log(this.form.value);
  }
}
