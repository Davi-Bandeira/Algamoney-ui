import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  profissoes = ['Desenvolvedor', 'Empresário', 'Outra'];
  profissao = 'Outra';

  // tslint:disable-next-line:typedef
  salvar(form: NgForm) {
    console.log(this.profissao);
    console.log(form.value.profissao);
  }
}

