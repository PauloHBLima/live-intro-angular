import { Component } from '@angular/core';

interface Produto {
    nome: string;
    valor: string;
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
bebidas: Array<Produto> = [
    {nome: 'Coca Cola 2l', valor: '10'},
    {nome: 'Fanta', valor: '20'},
    {nome: 'pepsi', valor: '30'},
]
}

