<<<<<<< HEAD
import { Component, EventEmitter, Output } from '@angular/core';
=======
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
>>>>>>> ccaba1ef8dc8e213eca6cddef43a34e4cd4563a1

interface Pessoa {
    nome: string;
    email: string;
}

@Component({
<<<<<<< HEAD
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {
=======
    selector: 'app-output',
    templateUrl: './output.component.html',
    styleUrls: ['./output.component.scss'],
})
export class OutputComponent implements OnInit {
>>>>>>> ccaba1ef8dc8e213eca6cddef43a34e4cd4563a1
    @Output() pessoa = new EventEmitter<Pessoa>();

    form: Pessoa = {
        nome: '',
        email: '',
<<<<<<< HEAD
    }
=======
    };

    ngOnInit(): void {}
>>>>>>> ccaba1ef8dc8e213eca6cddef43a34e4cd4563a1

    emitPessoa() {
        this.pessoa.emit(this.form);
    }
}
<<<<<<< HEAD

=======
>>>>>>> ccaba1ef8dc8e213eca6cddef43a34e4cd4563a1
