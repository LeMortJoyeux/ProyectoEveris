import { Component, OnInit } from '@angular/core';
import { Cliente } from '../dto/cliente';
import { ClienteService } from '../service/cliente.service';

import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  cliente = new Cliente();
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {



  }

  onSubmit(form: NgForm){
    this.cliente = form.value;

    console.log("Cliente a guardar " + this.cliente)
    this.clienteService.guardar(this.cliente);
  
    }




}
