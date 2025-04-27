import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css'],
  standalone: true,
  imports: [FormsModule],  // Include FormsModule here
})
export class HomeScreenComponent {
  isLogin = true;  // True means Login form is shown, false means Sign Up form

  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  // Toggle between Login and Sign Up form
  toggleForm(formType: 'login' | 'signup') {
    this.isLogin = formType === 'login';
  }

  // Handle form submission
  submitForm() {
    if (this.isLogin) {
      // Handle login logic
      console.log('Logging in with:', this.email, this.password);
    } else {
      // Handle sign-up logic
      if (this.password === this.confirmPassword) {
        console.log('Signing up with:', this.email, this.password);
      } else {
        console.error('Passwords do not match!');
      }
    }
  }
}
