import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-puck-family-info',
  templateUrl: './puck-family-info.component.html',
  styleUrls: ['./puck-family-info.component.scss']
})
export class PuckFamilyInfoComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigate(){
    this.router.navigateByUrl('add-puck/puck-environments', {skipLocationChange: true})
  }
}
