import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent {

  public pessoas = [
    {
      nome: 'Manoel Pinheiro', cidade: 'Uberlândia', estado: 'MG',
      status: true
    },
    {
      nome: 'Sebastião da Silva', cidade: 'São Paulo', estado: 'SP',
      status: false
    },
    {
      nome: 'Carla Souza', cidade: 'Florianópolis', estado: 'SC',
      status: true
    },
    {
      nome: 'Luíz Pereira', cidade: 'Curitiba', estado: 'PR',
      status: true
    },
    {
      nome: 'Vilmar Andrade', cidade: 'Rio de Janeiro', estado: 'RJ',
      status: false
    }
  ];

}
