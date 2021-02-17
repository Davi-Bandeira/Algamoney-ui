import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-launch-search',
  templateUrl: './launch-search.component.html',
  styleUrls: ['./launch-search.component.css']
})
export class LaunchSearchComponent {

  public lancamentos = [
    {
      tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/06/2017',
      dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José'
    },
    {
      tipo: 'DESPESA', descricao: 'Compra de Arroz', dataVencimento: '30/06/2017',
      dataPagamento: null, valor: 24.55, pessoa: 'Supermecado do João'
    },
    {
      tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: '10/06/2017',
      dataPagamento: '09/06/2017', valor: 40055, pessoa: 'Atacado Brasil'
    },
    {
      tipo: 'DESPESA', descricao: 'Mensalidade musculação', dataVencimento: '13/06/2017',
      dataPagamento: null, valor: 100, pessoa: 'Academia Top'
    },
    {
      tipo: 'DESPESA', descricao: 'Mensalidade musculação', dataVencimento: '20/06/2019',
      dataPagamento: null, valor: 90, pessoa: 'Academia Ritmos'
    },
    {
      tipo: 'RECEITA', descricao: 'Venda de Tablet', dataVencimento: '13/06/2020',
      dataPagamento: null, valor: 700, pessoa: 'Amigo de Gabriel'
    }
  ];
}
