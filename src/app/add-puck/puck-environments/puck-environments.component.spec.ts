import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuckEnvironmentsComponent } from './puck-environments.component';

describe('PuckEnvironmentsComponent', () => {
  let component: PuckEnvironmentsComponent;
  let fixture: ComponentFixture<PuckEnvironmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuckEnvironmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuckEnvironmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
