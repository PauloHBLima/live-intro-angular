import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TesteComponent } from './pages/teste/teste.component';
import { ProductComponent } from './pages/product/product.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'teste', component: TesteComponent },
<<<<<<< HEAD
    { path: 'products', component: ProductsComponent},
    { path: 'products/:id', component: ProductComponent},
    { path: 'not-found', component: NotFoundComponent},
    { path: '**', redirectTo: '/not-found'},
=======
    { path: 'products', component: ProductsComponent },
    { path: 'products/:id', component: ProductComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: '/not-found' },
>>>>>>> ccaba1ef8dc8e213eca6cddef43a34e4cd4563a1
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
