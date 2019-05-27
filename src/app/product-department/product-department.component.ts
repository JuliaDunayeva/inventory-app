import {
  Component,
  Input
} from '@angular/core';
import { Product } from '../product.model';

/**
 * @ProductDepartment: A component to show the breadcrumbs to a
 * Product's department
 */
@Component({
  selector: 'product-department',
  templateUrl: './product-department.component.html'
})
export class ProductDepartmentComponent {
    @Input() product: Product;

   /* public calculatePrice() : boolean {
        const shoes = 20;
        const hats = 30;
        const jewelery = 50;
        const items = [shoes, hats, jewelery];
        let shouldBuy = false;
        switch (items[0] + items[1]) {
            case 50: {
                //statements; 
                shouldBuy = true;
                break;
            }
            case 60: {
                //statements; 
                shouldBuy = false;
                break;
            }
            case 40: {
                shouldBuy = true;
                break;
            }
            default: {
                //statements; 
                shouldBuy = false;
                break;
            }
        }  
        return shouldBuy;
    }*/
}
