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
import { AuthGuard } from './auth.guard';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OrdersComponent } from './profile/orders/orders.component';
import { SweetorderListComponent } from './board-admin/sweetorder-list/sweetorder-list.component';
import { ViewdetailComponent } from './board-admin/viewdetail/viewdetail.component';
import { CategoryListComponent } from './board-admin/category-list/category-list.component';
import { CategoryDetailsComponent } from './board-admin/category-details/category-details.component';
import { CreateCategoryComponent } from './board-admin/create-category/create-category.component';
import { UpdateCategoryComponent } from './board-admin/update-category/update-category.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent,canActivate:[AuthGuard] },
  { path: 'user', component: BoardUserComponent,canActivate:[AuthGuard] },
  { path: 'myorders', component:OrdersComponent,canActivate:[AuthGuard]},
  { path: 'admin', component: BoardAdminComponent,canActivate:[AuthGuard],
  children:[
    { path: 'products', component: ProductListComponent,canActivate:[AuthGuard] },
    { path: 'add', component: CreateProductComponent,canActivate:[AuthGuard] },
    { path: 'update/:id', component: UpdateProductComponent,canActivate:[AuthGuard] },
    { path: 'proddetails/:id', component: ProductDetailsComponent,canActivate:[AuthGuard] },
    { path: 'sweetorder', component: SweetorderListComponent,canActivate:[AuthGuard] },
    { path: 'orderdetails/:id', component: ViewdetailComponent,canActivate:[AuthGuard] },
    { path: 'category', component: CategoryListComponent,canActivate:[AuthGuard] },
    { path: 'addcategory', component: CreateCategoryComponent,canActivate:[AuthGuard] },
    { path: 'updatecategory/:id', component: UpdateCategoryComponent,canActivate:[AuthGuard] },
    { path: 'categorydetails/:id', component: CategoryDetailsComponent,canActivate:[AuthGuard] },
  ],},
  { path: 'about', component:AboutComponent},
  { path: 'contact', component:ContactUsComponent},
  {path: '404',component:NotfoundComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
