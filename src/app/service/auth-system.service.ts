import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthSystemService {
  public connecte : boolean = false ; 
  logged_in : boolean = false ; 
  token: any=null
  constructor(private http : HttpClient , public router: Router) { }
  public getToken(): string {
    this.token =  sessionStorage.getItem('token');
    return   this.token 
  }
  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean reflecting 
    // whether or not the token is expired
    return tokenNotExpired(null, token);
  }
  login(data:any): Observable<any> {
    this.logged_in = true ;
    this.connecte = true;
    
    return this.http.post(environment.urlBackend + 'sessions/', data);
  }

  register(data:any): Observable<any> {
    return this.http.post(environment.urlBackend + 'registrations/' , data)
  }


}
function tokenNotExpired(arg0: null, token: string): boolean {
  throw new Error('Function not implemented.');
}

