import { Component, inject, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators, NonNullableFormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
  
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  
  protected readonly carregando = signal(false);
  protected readonly erro = signal <string | null>(null);

  protected readonly form = this.fb.group({
    email:['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required]],
  });

  protected entrar(): void{
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }
    
    this.carregando.set(true);
    this.erro.set(null);
    
    this.auth.login(this.form.getRawValue()).subscribe({
      next:() => this.router.navigate(['/lista-funcionarios']),
      error:() =>{
        this.erro.set('Email ou senha inválidos.');
        this.carregando.set(false);
      }
    }
)};

  
}
