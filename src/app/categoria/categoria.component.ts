import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';
import { AlertasService } from './../service/alertas.service';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

categoria: Categoria = new Categoria()
listaCategorias: Categoria[]

constructor(
    private router: Router,
    private categoriaService: CategoriaService,
    private alertas: AlertasService
){}

 ngOnInit() {
    if(environment.token == ''){
      this.router.navigate(['/inicio'])
    }
    this.findAllCategorias()
  }

 findAllCategorias(){
    this.categoriaService.getAllCategoria().subscribe((resp:Categoria[]) => {
      this.listaCategorias = resp
    })
  }

  cadastrar(){
    this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria)=>{
      this.categoria = resp
      this.alertas.showAlertSuccess('Categoria cadastrada com sucesso!')
      this.findAllCategorias()
      this.categoria = new Categoria()
    })
  }


}
