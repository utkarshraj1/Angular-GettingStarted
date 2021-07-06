import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IProduct } from "./product";

@Component({
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

    titlePage: string = "Product Details";
    product: IProduct | undefined;

    constructor(private route: ActivatedRoute,
                private routeBack: Router) {
    }

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.titlePage += `: ${id}`;
    }

    onBack(): void {
        this.routeBack.navigate(['/products']);
    }
}