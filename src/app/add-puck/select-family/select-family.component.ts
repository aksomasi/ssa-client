import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-select-family',
  templateUrl: './select-family.component.html',
  styleUrls: ['./select-family.component.scss']
})
export class SelectFamilyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigate(){
    this.router.navigateByUrl('add-puck/family-info', {skipLocationChange: true})
  }
}
