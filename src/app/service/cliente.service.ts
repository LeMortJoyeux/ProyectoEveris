import { HttpClient } from '@angular/common/http';    
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../dto/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8080/';

  guardar(cliente: Cliente): Observable<any>{//se llama el objeto persona al metodo del servicio
    console.log(cliente.nombre)
    return this.http.post('http://localhost:8080/save', cliente);
  }
  getAll(): Observable<any>{
    return this.http.get('http://localhost:8080/all');
  }
  getIdClient(id:number): Observable<any>{
    return this.http.get(this.Url + id);
  }
  
}
