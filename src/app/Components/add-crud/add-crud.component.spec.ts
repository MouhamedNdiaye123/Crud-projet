import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCrudComponent } from './add-crud.component';

describe('AddItemComponent', () => {
  let component: AddCrudComponent;
  let fixture: ComponentFixture<AddCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCrudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
