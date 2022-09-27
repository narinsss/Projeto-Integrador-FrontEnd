import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { Produto } from '../model/Produto';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllProduto(): Observable<Produto[]> {
    return this.http.get<Produto[]>('https://acquacode.herokuapp.com/produto', this.token)
  }

  getByIdProduto(id: number): Observable<Produto>{
    return this.http.get<Produto>(`https://acquacode.herokuapp.com/produto/${id}`, this.token)
  }

  getByNomeProduto(nomeProduto: string): Observable<Produto[]>{
    return this.http.get<Produto[]>(`https://acquacode.herokuapp.com/produto/${nomeProduto}`, this.token)
  }


  postProduto(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>('https://acquacode.herokuapp.com/produto', produto, this.token)
  }

  putProduto(produto: Produto): Observable<Produto>{
    return this.http.put<Produto>('https://acquacode.herokuapp.com/produto', produto, this.token)
  }

  deleteProduto(id: number){
    return this.http.delete(`https://acquacode.herokuapp.com/produto/${id}`, this.token)
  }

}
