import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import {Cadastro} from './components/cadastro/cadastro';    
import {FormularioFuncionarios} from './components/formulario-funcionarios/formulario-funcionarios';
import {ListaFuncionarios} from './components/lista-funcionarios/lista-funcionarios';       
import {Enderecos} from './components/enderecos/enderecos';
import {Contatos} from './components/contatos/contatos'; 

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: Login},
    {path: 'cadastro', component: Cadastro},
    {path: 'formulario-funcionario', component: FormularioFuncionarios},
    {path: 'lista-funcionarios', component: ListaFuncionarios},
    {path: 'enderecos', component: Enderecos},
    {path: 'contatos', component: Contatos},
];
