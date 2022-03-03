import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule, Routes} from "@angular/router";
import {AddPuckComponent} from "./add-puck/add-puck.component";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
  {path: '', component: DashboardComponent,
  children: [
    {path: 'add-puck', component: AddPuckComponent}
  ]},
];

@NgModule({
  declarations: [
    AddPuckComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PuckInfoModule { }
