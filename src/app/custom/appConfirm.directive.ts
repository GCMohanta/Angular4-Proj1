import {Directive,HostListener, Input} from '@angular/core';

@Directive({
	selector : '[appConfirm]'
})
export class appConfirm {
	//@ -- decorator
  @Input() appConfirm;

  @HostListener('click') eventTrigger() {
    //this.appConfirm();
    appConfirm
  }
}

