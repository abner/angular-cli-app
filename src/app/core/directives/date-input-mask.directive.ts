import { HostListener, Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
    selector: 'input[dateInputMask]'
})
export class DateInputMaskDirective implements AfterViewInit {

    private inputElement: HTMLInputElement;

    @Input('dateInputMask') dateInputMask = 'dd/MM/yyyy';

    @HostListener('input', ['$event.target.value']) onInput(e) {
        let dateValue = this.formatDate(e);
        this.ngControl.viewToModelUpdate(dateValue);
    }

    constructor(inputElement: ElementRef, private ngControl: NgControl) {
        this.inputElement = inputElement.nativeElement;

        // this.ngControl.valueChanges.subscribe((value) => {
        //     this.ngControl.viewToModelUpdate(this.formatDate(value));
        // });
    }

    ngAfterViewInit() {
        setTimeout(() => {
            let dateValue = this.formatDate(this.inputElement.value);
            console.log('DATE VALUE', dateValue);
            this.ngControl.viewToModelUpdate(dateValue);
        });
    }

    formatDate(value: string) {
        return value.replace(/\//g, '');
    }

}
