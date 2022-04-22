import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAgregarModificarComponent } from './modal-agregar-modificar.component';

describe('ModalAgregarModificarComponent', () => {
  let component: ModalAgregarModificarComponent;
  let fixture: ComponentFixture<ModalAgregarModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAgregarModificarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAgregarModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
