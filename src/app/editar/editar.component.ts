import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../dto/cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  cliente = new Cliente();
  id: number;

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
  }


}
