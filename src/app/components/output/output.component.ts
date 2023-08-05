import { Component, EventEmitter, Output } from '@angular/core';

interface Pessoa {
    nome: string;
    email: string;
}

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {
    @Output() pessoa = new EventEmitter<Pessoa>();

    form: Pessoa = {
        nome: '',
        email: '',
    }

    emitPessoa() {
        this.pessoa.emit(this.form);
    }
}

