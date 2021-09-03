import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCompraViewComponent } from './detalle-compra-view.component';

describe('DetalleCompraViewComponent', () => {
  let component: DetalleCompraViewComponent;
  let fixture: ComponentFixture<DetalleCompraViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleCompraViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCompraViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
