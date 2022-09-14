import { User } from "./User"
import { Categoria} from "./Categoria"

export class Produto{
public id: number
public nomeProduto: string
public descricao: string
public valor: number
public medida: string
public quantidade: number
public foto: string
public usuario: User
public categoria: Categoria


}