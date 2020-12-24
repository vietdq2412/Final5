import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateProductComponent} from './product/create-product/create-product.component';
import {ListProductComponent} from './product/list-product/list-product.component';
import {UpdateProductComponent} from './product/update-product/update-product.component';


const routes: Routes = [{
  path: 'create-product',
  component: CreateProductComponent
}, {
  path: 'list-product',
  component: ListProductComponent
}, {
  path: 'update-product/:id',
  component: UpdateProductComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
