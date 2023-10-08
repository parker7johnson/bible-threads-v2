import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl : string= 'http://localhost:3000/auth'

  constructor(private http : HttpClient) { }

  register(userBody : any) {
    return this.http.post<any>(this.baseUrl + '/register', userBody);
  }

}
