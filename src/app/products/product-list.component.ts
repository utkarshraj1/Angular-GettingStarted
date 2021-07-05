import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  //Properties
  pageTitle: string = "Product List";
  starValue: string = ""
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  //filterValue: string = '';
  private _filterValue: string = '';
  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];

  //Constructor
  constructor(private productService: ProductService) {
  }
  /*Above code is the shorthand technique of :
  private _productService;
  constructor(productService: ProductService) {
    this._productService = productService;
  }
  */

  //Getters and Setters
  get filterValue(): string {
    return this._filterValue;
  }
  set filterValue(value: string) {
    this._filterValue = value;
    this.filteredProducts = this.filterByValue(value);
  }

  //Methods
  showOrHide(): void {
    this.showImage = !this.showImage;
  }
  filterByValue(value: string): IProduct[] {
    value = value.toLocaleLowerCase();
    return this.products.filter(
      (product: IProduct) => product.productName.toLocaleLowerCase().includes(value)
    );
  }
  starClickEvent(value: string): void {
    this.starValue = value;
  }

  //Lifecycle Hooks
  ngOnInit(): void {
    //console.log("ngOnInIt method, to be used later");
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }
}