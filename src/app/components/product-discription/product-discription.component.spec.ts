import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDiscriptionComponent } from './product-discription.component';

describe('ProductDiscriptionComponent', () => {
  let component: ProductDiscriptionComponent;
  let fixture: ComponentFixture<ProductDiscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDiscriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDiscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
