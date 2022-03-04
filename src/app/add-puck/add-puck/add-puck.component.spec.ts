import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPuckComponent } from './add-puck.component';

describe('AddPuckComponent', () => {
  let component: AddPuckComponent;
  let fixture: ComponentFixture<AddPuckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPuckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPuckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
