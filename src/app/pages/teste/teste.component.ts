import { Component } from '@angular/core';
interface Pessoa {
    nome: string;
    email: string;
}

interface Pessoa {
    nome: string;
    email: string;
}

@Component({
    selector: 'app-teste',
    templateUrl: './teste.component.html',
    styleUrls: ['./teste.component.scss'],
})
export class TesteComponent {
<<<<<<< HEAD
    title: string = 'Teste titulo';

    showWelcomeAlert(pessoa: Pessoa) {
        console.log('dados que vieram do componente output', pessoa);
        (alert(`Seja bem vindo ${pessoa.nome}`))
=======
    title: string = 'Teste título';

    showWelcomeAlert(pessoa: Pessoa) {
        console.log('dados que vieram do componente output: ', pessoa);
        alert(`Seja bem vindo ${pessoa.nome}`);
>>>>>>> ccaba1ef8dc8e213eca6cddef43a34e4cd4563a1
    }
}
