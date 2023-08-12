import { IFakeProducts } from 'src/app/interfaces/FakeProduct.interface';

import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
    title: string = 'Produtos';

    products: Array<IFakeProducts> = []

    constructor(private productsService: ProductsService, private router: Router) {}

    ngOnInit(): void {
        this.getProducts();
    }

    getProducts() {
        this.productsService.findAll(20, "desc").subscribe({
            next: (response) => {
                this.products = response;
            },
            error: (err) => {
                console.log('[ERROR]:', err);
            },
            complete: () => console.log('[COMPLETE]: Requisição concluida com sucessso'),
        })
    }
redirectProductPage(id: number): void {
    this.router.navigate([`/products/${id}`]);
};

}
