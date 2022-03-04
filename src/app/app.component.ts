import { Component } from '@angular/core';
import {Router, RoutesRecognized} from "@angular/router";
import {filter} from "rxjs";
import {PuckService} from "./puck.service";
import {UrlToValue} from "./puck.contants";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'self-service-app';
  url = '';
  constructor(private router: Router, private puckService: PuckService) {
    router.events
      .pipe(filter(event => event instanceof RoutesRecognized))
      .subscribe((event: any) => {
        this.url  = event?.url;
        // @ts-ignore
        this.puckService.setSelectedPage(UrlToValue[this.url])
        console.log(event);
      });
  }
}
