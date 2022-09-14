import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';




@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  categoria : Categoria = new Categoria()
  listaCategorias: Categoria[]

  constructor(
    private router: Router,
    private authService: AuthService,
    private categoriaService : CategoriaService

  ) { }

  ngOnInit() {
  
    window.scroll(0,0)

    if(environment.token == ''){
      this.router.navigate(['/inicio'])
    }

    this.getAllCategorias()


  }

  getAllCategorias() {
    this.categoriaService.getAllCategoria().subscribe((resp : Categoria[] ) =>{
      this.listaCategorias = resp
    })
  }


}
