import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditManufacturerFormComponent } from './edit-manufacturer-form.component';

describe('EditManufacturerFormComponent', () => {
  let component: EditManufacturerFormComponent;
  let fixture: ComponentFixture<EditManufacturerFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditManufacturerFormComponent]
    });
    fixture = TestBed.createComponent(EditManufacturerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
