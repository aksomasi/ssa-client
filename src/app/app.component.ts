import { Component } from '@angular/core';
import {Router, RoutesRecognized} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'self-service-app';
  url = '';
  constructor(private router: Router) {
    router.events
      .pipe(filter(event => event instanceof RoutesRecognized))
      .subscribe((event: any) => {
        this.url  = event?.url;
        console.log(event);
      });  }
}
