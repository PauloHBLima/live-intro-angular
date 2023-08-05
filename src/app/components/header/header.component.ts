import { Component } from '@angular/core';

interface MenuLinks {
    rota: string;
    texto: string;
}

@Component({
<<<<<<< HEAD
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    menus: MenuLinks[] = [
        {rota: '/', texto: 'Home'},
        {rota: '/teste', texto: 'Teste'},
        {rota: '/products', texto: 'Produtos'},
    ]
=======
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    menus: MenuLinks[] = [
        { rota: '/', texto: 'Home' },
        { rota: '/teste', texto: 'Teste' },
        { rota: '/products', texto: 'Produtos' },
    ];
>>>>>>> ccaba1ef8dc8e213eca6cddef43a34e4cd4563a1
}
