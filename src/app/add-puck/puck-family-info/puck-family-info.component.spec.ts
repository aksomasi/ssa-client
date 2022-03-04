import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuckFamilyInfoComponent } from './puck-family-info.component';

describe('PuckFamilyInfoComponent', () => {
  let component: PuckFamilyInfoComponent;
  let fixture: ComponentFixture<PuckFamilyInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuckFamilyInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuckFamilyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
