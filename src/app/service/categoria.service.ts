import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllCategoria(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>('https://acquacode.herokuapp.com/categoria', this.token)
  }

  getByIdCategoria(id: number): Observable<Categoria>{
    return this.http.get<Categoria>(`https://acquacode.herokuapp.com/categoria/${id}`, this.token)
  }

  getByTipoCategoria(tipo: string): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`https://acquacode.herokuapp.com/categoria/tipo/${tipo}`, this.token)
  }

  postCategoria(categoria: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>('https://acquacode.herokuapp.com/categoria', categoria, this.token)
  }

  putCategoria(categoria: Categoria): Observable<Categoria>{
    return this.http.put<Categoria>('https://acquacode.herokuapp.com/categoria', categoria, this.token)
  }

  deleteCategoria(id: number){
    return this.http.delete(`https://acquacode.herokuapp.com/categoria/${id}`, this.token)
  }



}
