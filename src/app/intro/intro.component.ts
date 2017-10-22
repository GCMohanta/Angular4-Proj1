import { Component } from '@angular/core';

@Component({
  selector: 'my-intro',
  //template: `<h1>Hello {{name}}</h1>`,
  templateUrl: './intro.component.html',
})
export class IntroComponent  {
  name:string = 'Angular Intro';
  num:number = 23;
  gender:boolean = true;

  obj:any = {key:'value', key1:'varlue2'}
  fruits:string[] = ['banana', 'kiwi', 'litchi'];
  one:number = 12;
  two:number = 56;

}
