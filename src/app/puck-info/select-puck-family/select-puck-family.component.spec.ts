import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPuckFamilyComponent } from './select-puck-family.component';

describe('SelectPuckFamilyComponent', () => {
  let component: SelectPuckFamilyComponent;
  let fixture: ComponentFixture<SelectPuckFamilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectPuckFamilyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPuckFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
