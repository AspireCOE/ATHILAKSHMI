import { Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { StudentComponent } from './student/student.component';
import { ProductComponent } from './product/product.component';
import { BankComponent } from './bank/bank.component';

export const routes: Routes = [
    {
        path:'shop',
        component:ShopComponent
    },
    {
        path:'student',
        component:StudentComponent
    },
    {
        path:'product',
        component:ProductComponent
    },{
        path:'**',
        component:ShopComponent
    },
    {
        path:'bank',
        component:BankComponent
    }
];
