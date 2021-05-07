import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { AboutComponent } from './about/about.component';
import { ProductListComponent } from './board-admin/product-list/product-list.component';
import { CreateProductComponent } from './board-admin/create-product/create-product.component';
import { ProductDetailsComponent } from './board-admin/product-details/product-details.component';
import { UpdateProductComponent } from './board-admin/update-product/update-product.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'admin', component: BoardAdminComponent,
  children:[
    { path: 'products', component: ProductListComponent },
    { path: 'add', component: CreateProductComponent },
    { path: 'update/:id', component: UpdateProductComponent },
    { path: 'details/:id', component: ProductDetailsComponent },
  ]},
  { path: 'about', component:AboutComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
