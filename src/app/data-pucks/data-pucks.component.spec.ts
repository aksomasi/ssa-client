import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPucksComponent } from './data-pucks.component';

describe('DataPucksComponent', () => {
  let component: DataPucksComponent;
  let fixture: ComponentFixture<DataPucksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataPucksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPucksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
