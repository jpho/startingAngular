import { Component } from '@angular/core';
import { ProductService } from './products/product.service';

@Component({
  selector: 'pm-app',
  template: `
  <div><h1>{{pageTitle}}</h1>
    <pm-products></pm-products>
  </div>`,
  providers: [ ProductService ] // ok angular provide this service, ProductService, our DB
})
export class AppComponent  { 
  pageTitle: string = 'NTC Product Management'
 }
