import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    cropWidth: number = 75;
    @Input() rating: number = 0;
    @Output() clickedRating: EventEmitter<string>
        = new EventEmitter<string>();

    ngOnChanges(): void {
        this.cropWidth = this.rating * 15;
        console.log("ngOnChanges method fired");
    }

    onClick(): void {
        console.log(`You clicked on ${this.rating} stars`);
        this.clickedRating.emit(`${this.rating}`);
    }
}