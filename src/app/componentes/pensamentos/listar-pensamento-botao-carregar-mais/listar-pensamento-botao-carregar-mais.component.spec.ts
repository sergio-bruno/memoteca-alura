import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPensamentoBotaoCarregarMaisComponent } from './listar-pensamento-botao-carregar-mais.component';

describe('ListarPensamentoBotaoCarregarMaisComponent', () => {
  let component: ListarPensamentoBotaoCarregarMaisComponent;
  let fixture: ComponentFixture<ListarPensamentoBotaoCarregarMaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPensamentoBotaoCarregarMaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPensamentoBotaoCarregarMaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
