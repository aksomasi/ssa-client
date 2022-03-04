import { Component, OnInit } from '@angular/core';
import {Router, RoutesRecognized} from "@angular/router";
import {filter} from "rxjs";
import {UrlToValue} from "../../puck.contants";
import {PuckService} from "../../puck.service";

@Component({
  selector: 'app-add-puck',
  templateUrl: './add-puck.component.html',
  styleUrls: ['./add-puck.component.scss']
})
export class AddPuckComponent implements OnInit {

  constructor(private router: Router,public puckService: PuckService) {

  }
  ngOnInit(): void {
  }
  navigate(url: string){
    this.router.navigateByUrl(url, {skipLocationChange: true})
  }
}
