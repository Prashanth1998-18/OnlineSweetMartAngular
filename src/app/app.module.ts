import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateProductComponent } from './board-admin/create-product/create-product.component';
import { ProductDetailsComponent } from './board-admin/product-details/product-details.component';
import { ProductListComponent } from './board-admin/product-list/product-list.component';
import { UpdateProductComponent } from './board-admin/update-product/update-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchfilterPipeProduct } from './board-admin/searchfilterProduct.pipe';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './auth.guard';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OrdersComponent } from './profile/orders/orders.component';
import { SweetorderListComponent } from './board-admin/sweetorder-list/sweetorder-list.component';
import { ViewdetailComponent } from './board-admin/viewdetail/viewdetail.component';
import { SearchfilterPipeSweetOrder } from './board-admin/searchfilterorder.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardUserComponent,
    AboutComponent,
    HomeComponent,
    CreateProductComponent,
    ProductDetailsComponent,
    ProductListComponent,
    UpdateProductComponent,
    SearchfilterPipeProduct,
    NotfoundComponent,
    ContactUsComponent,
    OrdersComponent,
    SweetorderListComponent,
    ViewdetailComponent,
    SearchfilterPipeSweetOrder
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    
  ],
  providers: [authInterceptorProviders,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
