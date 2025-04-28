import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { AuthService } from '../service/auth.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css'],
  standalone: true,
  imports: [FormsModule,CommonModule],  // Include FormsModule here
})
export class HomeScreenComponent {
  isLogin = true;

  email = '';
  password = '';
  mobile = '';

  constructor(public authService: AuthService) {}

  toggleForm() {
    this.isLogin = !this.isLogin;
  }

  submitForm() {
    if (this.isLogin) {
      // Login API call
      this.authService.login(this.email, this.password).subscribe({
        next: (res) => {
          console.log('Login Success:', res);
          // maybe redirect ya token save kar lena
        },
        error: (err) => {
          console.error('Login Failed:', err);
        }
      });
    } else {
      // Signup API call
      this.authService.signup(this.email, this.mobile, this.password).subscribe({
        next: (res) => {
          console.log('Signup Success:', res);
          this.isLogin = true; // After signup, move back to Login
        },
        error: (err) => {
          console.error('Signup Failed:', err);
        }
      });
    }
  }
}
