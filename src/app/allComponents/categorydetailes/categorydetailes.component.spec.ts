import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorydetailesComponent } from './categorydetailes.component';

describe('CategorydetailesComponent', () => {
  let component: CategorydetailesComponent;
  let fixture: ComponentFixture<CategorydetailesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CategorydetailesComponent]
    });
    fixture = TestBed.createComponent(CategorydetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
