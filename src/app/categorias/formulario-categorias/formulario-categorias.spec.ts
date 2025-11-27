import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCategorias } from './formulario-categorias';

describe('FormularioCategorias', () => {
  let component: FormularioCategorias;
  let fixture: ComponentFixture<FormularioCategorias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioCategorias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioCategorias);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
