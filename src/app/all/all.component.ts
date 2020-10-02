import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../dto/cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
  listclient: any[];
  constructor(private clienteService: ClienteService, private router: Router){  }

  ngOnInit()  {
    this.clienteService.getAll().subscribe(
      (resp) => {
        this.listclient = resp;

      })
  }
  Editar(cliente: Cliente):void{
    localStorage.setItem("id",cliente.id.toString());
    this.router.navigate(["edit"]);


  }

  }

