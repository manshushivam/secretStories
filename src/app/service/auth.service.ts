import { HttpClient ,HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:  HttpClientModule
})
export class AuthService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  login(payload:any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, payload);
  } 


  signup(payload:any): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, payload);
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
