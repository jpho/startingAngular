import {Component, OnInit} from "@angular/core";
import {IProduct} from './product'
import {ProductService} from './product.service'

@Component({
    selector: 'pm-products', // use this in <>
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css']
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = 'cart';
    errorMessage: string;
    
    products: IProduct[];

    constructor(private _productService: ProductService){} // injection of service into the component

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    
    // gets data from api
    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(products => this.products = products,
                 error => this.errorMessage = <any>error);        
    }

    onRatingClicked(message: string): void{
        this.pageTitle = 'Product List: ' + message;
    }
}