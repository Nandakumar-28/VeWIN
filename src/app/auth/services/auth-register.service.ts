import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthRegisterService {

  constructor( private http: HttpClient) { }
 
 private apiUrl = environment.apiUrl;

register(credentials: any, headers: HttpHeaders){
const registerUrl = `${this.apiUrl}/api/Public/registration`;
return this.http.post(registerUrl,credentials, { headers });
}

}
