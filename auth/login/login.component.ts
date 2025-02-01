import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    console.log('Login Attempt:', this.email, this.password);
    // Dummy authentication logic
    if (this.email === 'test@example.com' && this.password === 'password') {
      alert('Login Successful');
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials');
    }
}
}
