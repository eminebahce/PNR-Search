import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-backdrop',
    templateUrl: './backdrop.component.html',
    styleUrls: ['./backdrop.component.scss']
})
export class BackdropComponent implements OnInit {
    @Input() show!: boolean;
    @Output() clicked = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    backDropClick() {
        this.clicked.emit();
    }

}
