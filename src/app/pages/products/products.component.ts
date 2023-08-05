import { Component } from '@angular/core';

interface Produto {
    nome: string;
    valor: string;
    id: number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

    title: string = 'Produtos';
    bebidas: Array<Produto> = [
        {id:1, nome: 'Coca Cola 2l', valor: '10'},
        {id:2, nome: 'Fanta', valor: '20'},
        {id: 3, nome: 'pepsi', valor: '30'},
    ]
}
