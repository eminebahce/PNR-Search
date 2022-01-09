import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

    @Input() show!: boolean;
    @Input() title!: string;
    @Output() closed = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    close() {
        this.closed.emit();
    }

}
