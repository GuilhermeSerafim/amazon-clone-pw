import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxItemsComponent } from './box-items.component';

describe('BoxItemsComponent', () => {
  let component: BoxItemsComponent;
  let fixture: ComponentFixture<BoxItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
