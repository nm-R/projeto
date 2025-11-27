import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioProdutos } from './formulario-produtos';

describe('FormularioProdutos', () => {
  let component: FormularioProdutos;
  let fixture: ComponentFixture<FormularioProdutos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioProdutos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioProdutos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
