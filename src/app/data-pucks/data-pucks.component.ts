import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-pucks',
  templateUrl: './data-pucks.component.html',
  styleUrls: ['./data-pucks.component.scss']
})
export class DataPucksComponent implements OnInit {

  pucksList = ['Modules', 'C3 Buckets', 'Datasets']

  constructor() { }

  ngOnInit(): void {
  }

}
