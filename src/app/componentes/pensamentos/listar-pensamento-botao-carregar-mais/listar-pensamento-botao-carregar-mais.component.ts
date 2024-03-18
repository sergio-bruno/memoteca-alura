import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento-botao-carregar-mais',
  templateUrl: './listar-pensamento-botao-carregar-mais.component.html',
  styleUrls: ['./listar-pensamento-botao-carregar-mais.component.css']
})
export class ListarPensamentoBotaoCarregarMaisComponent implements OnInit {

  @Input() haMaisPensamentos: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
