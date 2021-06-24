import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

class Cliente {
  name: string;
  email: string;
  profissao = '';
}

@Component({
  selector: 'app-formularios-validacao',
  templateUrl: './formularios-validacao.component.html',
  styleUrls: ['./formularios-validacao.component.css']
})
export class FormulariosValidacaoComponent {

  profissoes = ['Desenvolvedor', 'Empresário', 'Outra'];
  profissao = 'Outra';
  client = new Cliente();

  // tslint:disable-next-line:typedef
  salvar(form: NgForm) {
    this.client.name = form.value.nome;
    this.client.email = form.value.email;
    this.client.profissao = form.value.profissao;

    form.reset();

    // console.log(this.profissao);
    // console.log(form.value.profissao);
    // console.log(form.value);
    // console.log(this.client);
    console.log(form);
  }
}
