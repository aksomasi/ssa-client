import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";

@Component({
  selector: 'app-view-pucks',
  templateUrl: './view-pucks.component.html',
  styleUrls: ['./view-pucks.component.scss']
})
export class ViewPucksComponent implements OnInit, AfterViewInit {
  constructor(private _liveAnnouncer: LiveAnnouncer) {

  }
  originalData: any;
  sortedData :any;
  @ViewChild(MatSort) sort!: MatSort;
  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  sortData(sort: Sort) {
    const data = this.originalData.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a: any, b :any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'puckName':
          return this.compare(a.puckName, b.puckName, isAsc);
        case 'environment':
          return this.compare(a.environment, b.environment, isAsc);
        case 'ownerName':
          return this.compare(a.ownerName, b.ownerName, isAsc);
       default:
          return 0;
      }
    });
    this.dataSource = new MatTableDataSource<DataPuck>(this.sortedData);
    // @ts-ignore
    this.dataSource.paginator = this.paginator;

  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  applyFilter(filterValue: any) {
    filterValue = filterValue.value.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  ngOnInit(): void {
    this.originalData = ELEMENT_DATA;
  }
  displayedColumns: string[] = ['puckName', 'environment', 'ownerName', 'actions'];
  dataSource = new MatTableDataSource<DataPuck>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | undefined;

  ngAfterViewInit() {
    this.sort.active = 'puckName';
    this.sort.direction = 'asc'

   this.sortData(this.sort);

  }

}


export interface DataPuck {
  puckName: string;
  environment: string;
  ownerName: string;
}

const ELEMENT_DATA: DataPuck[] = [
  { puckName: 'Hydrogen', environment: 'Prod', ownerName: 'H'},
  { puckName: 'Helium', environment: 'Prod', ownerName: 'He'},
  { puckName: 'Lithium', environment: 'Stag', ownerName: 'Li'},
  {puckName: 'Beryllium', environment: 'Prod', ownerName: 'Be'},
  { puckName: 'Boron', environment: 'Pre-Prod', ownerName: 'B'},
  { puckName: 'Carbon', environment:'Prod', ownerName: 'C'},
  { puckName: 'Nitrogen', environment: 'Prod', ownerName: 'N'},
  { puckName: 'Oxygen', environment: 'Stag', ownerName: 'O'},
  {puckName: 'Fluorine', environment: 'Prod', ownerName: 'F'},
];
