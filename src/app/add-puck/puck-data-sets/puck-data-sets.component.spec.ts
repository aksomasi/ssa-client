import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuckDataSetsComponent } from './puck-data-sets.component';

describe('PuckDataSetsComponent', () => {
  let component: PuckDataSetsComponent;
  let fixture: ComponentFixture<PuckDataSetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuckDataSetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuckDataSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
