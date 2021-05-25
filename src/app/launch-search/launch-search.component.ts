import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-launch-search',
  templateUrl: './launch-search.component.html',
  styleUrls: ['./launch-search.component.css']
})
export class LaunchSearchComponent {

  public lancamentos = [
    {
      tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2017, 6, 30) ,
      dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José'
    },
    {
      tipo: 'DESPESA', descricao: 'Compra de Arroz', dataVencimento: new Date(2017, 6, 30),
      dataPagamento: null, valor: 24.55, pessoa: 'Supermecado do João'
    },
    {
      tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: new Date(2012, 6, 10),
      dataPagamento: '09/06/2017', valor: 40055, pessoa: 'Atacado Brasil'
    },
    {
      tipo: 'DESPESA', descricao: 'Mensalidade musculação', dataVencimento: new Date(2018, 4, 13),
      dataPagamento: null, valor: 100, pessoa: 'Academia Top'
    },
    {
      tipo: 'DESPESA', descricao: 'Mensalidade musculação', dataVencimento: new Date(2019, 6, 20),
      dataPagamento: null, valor: 90, pessoa: 'Academia Ritmos'
    },
    {
      tipo: 'RECEITA', descricao: 'Venda de Tablet', dataVencimento: new Date(2020, 6, 13),
      dataPagamento: null, valor: 700, pessoa: 'Amigo de Gabriel'
    }
  ];
}
