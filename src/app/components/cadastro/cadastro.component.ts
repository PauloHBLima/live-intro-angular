<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> ccaba1ef8dc8e213eca6cddef43a34e4cd4563a1

interface Produto {
    nome: string;
    valor: string;
}

@Component({
<<<<<<< HEAD
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

=======
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html',
    styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
    bebidas: Array<Produto> = [
        { nome: 'Coca Cola 2L', valor: '10.00' },
        { nome: 'Coca Lata', valor: '5.00' },
        { nome: 'Água Mineral 300ml', valor: '4.50' },
        { nome: 'Água Mineral 1L', valor: '9.50' },
    ];

    bebidasExibir: Produto[] = [];

    ngOnInit(): void {
        this.setBebidasExibir();
    }

    setBebidasExibir() {
        for (let i = 0; i <= 1; i++) {
            this.bebidasExibir.push(this.bebidas[i]);
        }
    }
}
>>>>>>> ccaba1ef8dc8e213eca6cddef43a34e4cd4563a1
