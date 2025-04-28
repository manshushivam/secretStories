import { HttpClient ,HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:  HttpClientModule
})
export class AuthService {

  private baseUrl = 'https://your-api-url.com/api/auth'; // apna base URL daal yahan

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { email, password });
  }

  signup(email: string, mobile: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, { email, mobile, password });
  } 

  loginWithGoogle() {
    console.log('Login with Google - implement karna padega OAuth flow');
    // future: Google auth flow yahan handle kar
  }

  signupWithGoogle() {
    console.log('Signup with Google - implement karna padega OAuth flow');
    // future: Google auth flow yahan handle kar
  }
}
