import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObRxComponent } from './ob-rx.component';

describe('ObRxComponent', () => {
  let component: ObRxComponent;
  let fixture: ComponentFixture<ObRxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObRxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
