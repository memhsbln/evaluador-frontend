import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/services/register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private registerService: RegisterService, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log('onSubmit called');
    if (this.registerForm.valid) {
      console.log('Form is valid', this.registerForm.value);
      this.registerService.register(
        this.registerForm.value.name,
        this.registerForm.value.lastName,
        this.registerForm.value.username,
        this.registerForm.value.email,
        this.registerForm.value.password,
        this.registerForm.value.confirmPassword
      ).subscribe({
        next: (response: any) => {
          console.log('Registration successful', response);
          this.registerForm.reset();
          this.router.navigate(['/login']);
        },
        error: (error: any) => {
          console.error('Registration failed', error);
        }
      });
    } else {
      console.log('Form is invalid');
      Object.keys(this.registerForm.controls).forEach(key => {
        const control = this.registerForm.get(key);
        if (control?.invalid) {
          console.log(`${key} is invalid`, control.errors);
        }
      });
    }
  }
}
