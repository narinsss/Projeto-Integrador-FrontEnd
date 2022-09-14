import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { User } from '../model/User';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  produto: Produto = new Produto()

  nome = environment.nome;
  foto = environment.foto;
  id = environment.id;

  idCategoria: number
  listaCategorias : Categoria[]

  categoria : Categoria = new Categoria()

  usuario: User = new User()
  idUser = environment.id
  listaProdutos : Produto[]



  constructor(
    private router: Router,
    private categoriaService : CategoriaService,
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {

    this.validarFoto()

    this.getAllProduto()

    this.getAllCategoria()

  }

  validarFoto() {
    if (environment.foto == null) {
      this.foto = 'https://i.imgur.com/6yeHR7M.png';
    }
  }

  getAllProduto() {
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) =>{
      this.listaProdutos = resp
    })
  }

  getAllCategoria() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) =>{
      this.listaCategorias = resp
    })
  }


  findByIdCategoria(){
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) => {
      this.categoria = resp
    }) 
  }

  sair() {
    this.router.navigate(['/entrar'])
    environment.token = ''
    environment.nome = ''
    environment.foto = ''
    environment.id = 0
  }

  publicar() {
    this.categoria.id = this.idCategoria
    this.produto.categoria = this.categoria

    this.usuario.id = this.idUser
    this.produto.usuario = this.usuario

    this.produtoService.postProduto(this.produto).subscribe((resp: Produto) =>{
      this.produto = resp
      alert('Produto adicionado com sucesso!')
      this.produto = new Produto()
      this.getAllProduto()
    })
  }



}
