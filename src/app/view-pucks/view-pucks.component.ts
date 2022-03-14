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

  @ViewChild(MatSort, { static: false })
  set sort(v: MatSort) {
    this.dataSource.sort = v;
  }
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

  applyFilter(filterValue: any) {
    filterValue = filterValue.value.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  ngOnInit(): void {
  }
  displayedColumns: string[] = ['puckName', 'environment', 'ownerName', 'actions'];
  dataSource = new MatTableDataSource<DataPuck>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | undefined;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    // @ts-ignore
    this.dataSource.paginator = this.paginator;

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
