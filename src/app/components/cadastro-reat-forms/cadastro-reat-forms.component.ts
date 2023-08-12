import { CadastroComponent } from './../cadastro/cadastro.component';
import { Component, OnInit, inject } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface Produto {
    nome: string;
    valor: string;
}

@Component({
    selector: 'app-cadastro-reat-forms',
    templateUrl: './cadastro-reat-forms.component.html',
    styleUrls: ['./cadastro-reat-forms.component.scss']
})
export class CadastroReatFormsComponent implements OnInit {
    bebidas: Array<Produto> = [
        { nome: 'Coca Cola 2L', valor: '10.00' },
        { nome: 'Coca Lata', valor: '5.00' },
        { nome: 'Água Mineral 300ml', valor: '4.50' },
        { nome: 'ÁFormGroupL', valor: '9.50' },
    ];

    /*
        cadastroForm: FormGroup = new FormGroup({
            nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
            email: new FormControl(''),
            sexo: new FormControl(''),
            comida: new FormControl(''),
             bebida: new FormControl(''),
        })  /*utilizar para formulario curto  */

    emailRegex = /^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$/i;

    minLengthName: number = 5;
    nameRequiredError: string = 'paulo@email.com';
    nameRequiredErrorMessage: string = 'Email precisa de um @'

    constructor(private formBuilder: FormBuilder,  private router: Router) { }

    cadastroForm: FormGroup = this.formBuilder.group({
        nome: ['', Validators.compose([
            Validators.required,
            Validators.minLength(this.minLengthName)])],
        email: ['',
            Validators.compose([
                Validators.required,
                Validators.email,
                Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/)])],
        sexo: ['', Validators.required],
        comida: ['', Validators.pattern("")],
        bebida: [''],
    });

    ngOnInit(): void { }
ngOnDestroy(): void {
    '[INFO] Matando o componente'
}


    handleRegister(): void {
        if(this.cadastroForm.valid) {
            alert('criando um produto...');
        console.log(this.cadastroForm.value);
        this.cadastroForm.reset();
        this.router.navigate(['/products']);
        } else {
            alert('Não foi possivel enviar o formulário. Preencha os dados corretamenter')
        }
    }
}
