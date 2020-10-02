import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarComponent } from './agregar/agregar.component';
import { AllComponent } from './all/all.component';
import { EditarComponent } from './editar/editar.component';
import { InicioComponent } from './inicio/inicio.component';
import { LogInComponent } from './log-in/log-in.component';
import { MenuComponent } from './menu/menu.component';




const routes: Routes = [
  { path: '', component: LogInComponent},
  { path: 'verPersona', component: AllComponent },
  { path: 'agregar', component: AgregarComponent },
  { path: 'menu1', component: MenuComponent},
  { path: 'inicio', component:InicioComponent},
  { path: 'editar', component:EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
