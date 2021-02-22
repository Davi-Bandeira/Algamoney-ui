import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {

  nome = 'Thiago Faria';
  dataAniversario = new Date(1990, 3, 19);
  preco = 12855.32;
  troco = 0.57392;

}
