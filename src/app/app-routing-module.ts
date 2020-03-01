import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { InicioComponent } from './Components/inicio/inicio.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { VapesComponent } from "./Components/vapes/vapes.component";
import { SolicitudFranquiciaComponent } from "./Components/solicitud-franquicia/solicitud-franquicia.component";
import { ContactoComponent } from "./Components/contacto/contacto.component";

import { RouteEnum } from '../utils/enums/route-enum';

// import { Name2Component } from './';
// import { Name3Component } from './';
// import { Name4Component } from './';
// import { PageNotFoundComponen t } from './';

const routes: Routes = [
    { path: RouteEnum.INICIO, component: InicioComponent },
    { path: RouteEnum.NAVBAR, component: NavbarComponent },
    { path: RouteEnum.VAPE, component: VapesComponent },
    { path: RouteEnum.SOLICITUDFRANQUICIA, component: SolicitudFranquiciaComponent },
    { path: RouteEnum.CONTACTOCOMPONENT, component: ContactoComponent },
    { path: '', redirectTo: RouteEnum.INICIO, pathMatch: 'full' },
    { path: '**', redirectTo: RouteEnum.INICIO, pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
