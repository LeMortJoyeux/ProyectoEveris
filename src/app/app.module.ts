import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AllComponent } from './all/all.component';
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';
import { LogInComponent } from './log-in/log-in.component';
import { InicioComponent } from './inicio/inicio.component';
import { ClienteService } from './service/cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AllComponent,
    AgregarComponent,
    EditarComponent,
    LogInComponent,
    InicioComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
