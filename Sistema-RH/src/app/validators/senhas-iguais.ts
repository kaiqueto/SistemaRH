import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const senhasIguais: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
  const senha = group.get('senha')?.value;
  const confirmar = group.get('confirmarSenha')?.value;

  return senha && confirmar && senha !== confirmar ? { mismatch: true } : null;
};