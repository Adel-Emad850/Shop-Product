import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopHeadComponent } from './shop-head.component';

describe('ShopHeadComponent', () => {
  let component: ShopHeadComponent;
  let fixture: ComponentFixture<ShopHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopHeadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
