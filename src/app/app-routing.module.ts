import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'view-pucks', component: LoginComponent},
  {
    path: 'puck-info',
    loadChildren: () => import('./puck-info/puck-info.module').then(m => m.PuckInfoModule)
  },
  {
    path: 'add-puck',
    loadChildren: () => import('./add-puck/add-puck.module').then(m => m.AddPuckModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
