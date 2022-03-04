import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectFamilyComponent } from './select-family/select-family.component';
import { PuckFamilyInfoComponent } from './puck-family-info/puck-family-info.component';
import { PuckEnvironmentsComponent } from './puck-environments/puck-environments.component';
import { PuckDataSetsComponent } from './puck-data-sets/puck-data-sets.component';
import {RouterModule, Routes} from "@angular/router";
import {AddPuckComponent} from "./add-puck/add-puck.component";

const routes: Routes = [
  {path: '', component: AddPuckComponent,
    children: [
      {path: '', component: SelectFamilyComponent },
      {path: 'select-family', component: SelectFamilyComponent },
      {path: 'family-info', component: PuckFamilyInfoComponent },
      {path: 'puck-environments', component: PuckEnvironmentsComponent },
      {path: 'datasets', component: PuckDataSetsComponent },
    ]},
];


@NgModule({
  declarations: [
    AddPuckComponent,
    SelectFamilyComponent,
    PuckFamilyInfoComponent,
    PuckEnvironmentsComponent,
    PuckDataSetsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AddPuckModule { }
