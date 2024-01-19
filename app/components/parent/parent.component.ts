import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  tableItems:any[]=[];
  addItem(newItem:any){
    if(!newItem.name || !newItem.category){
      alert('All feilds are required');
      return newItem;
    }
    const isDuplicate = this.tableItems.some(
      (item) => item.name === newItem.name && item.category === newItem.category
    );
    if (isDuplicate) {
      alert('Item with the same name and category already added. Please choose a different item.');
    } else {
      const id = this.tableItems.length + 1;
      this.tableItems.push({ id, ...newItem });
    }
  }
  }

