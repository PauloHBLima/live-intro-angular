import { Component } from '@angular/core';

interface Produto {
<<<<<<< HEAD
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
=======
    id: number;
    nome: string;
    valor: string;
}

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
    title: string = 'Produtos';

    bebidas: Array<Produto> = [
        { id: 1, nome: 'Coca Cola 2L', valor: '10.00' },
        { id: 2, nome: 'Coca Lata', valor: '5.00' },
        { id: 3, nome: 'Água Mineral 300ml', valor: '4.50' },
        { id: 4, nome: 'Água Mineral 1L', valor: '9.50' },
    ];
>>>>>>> ccaba1ef8dc8e213eca6cddef43a34e4cd4563a1
}
