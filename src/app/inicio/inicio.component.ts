import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';




@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  categoria : Categoria = new Categoria()
  produto: Produto = new Produto()
  listaCategorias: Categoria[]
  listaProdutos: Produto[]

  constructor(
    private router: Router,
    private authService: AuthService,
    private categoriaService : CategoriaService,
    private produtoService: ProdutoService

  ) { }

  ngOnInit() {
  
    window.scroll(0,0)

    if(environment.token == ''){
      this.router.navigate(['/inicio'])
    }

    this.getAllCategorias()
    this.getAllProduto()


  }

  getAllProduto() {
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) =>{
      this.listaProdutos = resp
    })
  }

  getAllCategorias() {
    this.categoriaService.getAllCategoria().subscribe((resp : Categoria[] ) =>{
      this.listaCategorias = resp
    })
  }


}
