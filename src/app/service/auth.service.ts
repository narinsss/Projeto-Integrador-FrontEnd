import { Injectable } from '@angular/core';
import { UserLogin } from '../model/UserLogin';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
    ) { }

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('https://acquacode.herokuapp.com/swagger-ui/index.html#/usuario-controller/login', userLogin)
  }

  cadastrar(user: User): Observable<User>{
    return this.http.post<User>('https://acquacode.herokuapp.com/swagger-ui/index.html#/usuario-controller/postUsuario', user)
  }

  atualizar(user: User): Observable<User>{
    return this.http.put<User>('https://acquacode.herokuapp.com/swagger-ui/index.html#/usuario-controller/putUsuario', user)
  }

  getByIdUser(id: number): Observable<User>{
    return this.http.get<User>(`https://acquacode.herokuapp.com/swagger-ui/index.html#/usuario-controller/getById`)
  }

  logado(){
    let ok: boolean = false

    if(environment.token != ''){
      ok = true
    }
    return ok
  }

  deslogado(){
    let ok: boolean = true

    if(environment.token != ''){
      ok = false
    }
    return ok
  }

  adm() {
    let ok: boolean = false
     if(environment.tipo == 'adm'){
      ok = true
     }
     return ok
 }

 normal() {
  let ok: boolean = false
  if(environment.tipo == 'normal'){
    ok = true
  }else if(environment.token == ''){
    ok = true
  }
  return ok
}

}
