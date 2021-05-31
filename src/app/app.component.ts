import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

class Cliente {
  name: string;
  email: string;
  profissao: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  profissoes = ['Desenvolvedor', 'Empresário', 'Outra'];
  profissao = 'Outra';
  client = new Cliente();

  // tslint:disable-next-line:typedef
  salvar(form: NgForm) {
    this.client.name = form.value.nome;
    this.client.email = form.value.email;
    this.client.profissao = form.value.profissao;

    // console.log(this.profissao);
    // console.log(form.value.profissao);
    // console.log(form.value);
    // console.log(this.client);
    console.log(form);
  }
}

