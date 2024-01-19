import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
@Output()addItemEvent=new EventEmitter<any>();
selectedCategory:string='';
ItemName:string='';
quantity:number=0;


  addItem(){
    const newItem={
      category:this.selectedCategory,
      name:this.ItemName,
      quantity:this.quantity
    };
    this.addItemEvent.emit(newItem);
    if(newItem.name && newItem.category && newItem.quantity){
    this.selectedCategory='';
    this.ItemName='';
    this.quantity=0
  }
}
}
