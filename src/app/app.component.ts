import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public lancamentos = [
    { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/06/2017',
      dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José'},
    { tipo: 'DESPESA', descricao: 'Compra de Arroz', dataVencimento: '30/06/2017',
      dataPagamento: null, valor: 24.55, pessoa: 'Supermecado do João'},
    { tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: '10/06/2017',
      dataPagamento: '09/06/2017', valor: 40055, pessoa: 'Atacado Brasil'},
    { tipo: 'DESPESA', descricao: 'Mensalidade musculação', dataVencimento: '13/06/2017',
      dataPagamento: null, valor: 100, pessoa: 'Academia Top'},
  ];
}

