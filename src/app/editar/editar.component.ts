import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../dto/cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  cliente: Cliente = new Cliente();
  id: number;
  constructor(private http: ClienteService, private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.ruta.queryParams .subscribe(data =>{
      this.id = data.id;
      this.http.getIdClient(this.id).subscribe(
        (resp) => {
          this.cliente = resp;
        }, (error) => {
          console.log(error);
        }
      )
    })
  }
  guardarPersona() {
    this.http.guardar(this.cliente).subscribe(
      (resp) => {
        alert('Guardado')
      }, (error) => {
        console.log(error);
      }
    );
  }


}
