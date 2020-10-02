import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../dto/cliente';
import { ClienteService } from '../service/cliente.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  cliente = new Cliente();
  id: number;
  constructor(private clienteService: ClienteService, private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    

  }
  guardarPersona() {
    this.clienteService.guardar(this.cliente).subscribe(
      (resp) => {
        alert('Guardado')
      }, (error) => {
        console.log(error);
      }
    );
  }

}
