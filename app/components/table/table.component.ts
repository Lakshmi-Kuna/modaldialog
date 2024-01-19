import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
@Input() items:any[]=[];
calculateTotalQuantity(){
  return this.items.reduce((total,item)=>total+item.quantity,0)
}
TotalRows():number{
  return this.items.length;
}
constructor(private dialog:MatDialog){}
openEditDialog(item: any) {
  const dialogRef = this.dialog.open(EditComponent, {
    width: '400px',
    data: { item: { ...item } },
  });

  dialogRef.afterClosed().subscribe((result) => {
    if (result) {
      const isDuplicate = this.items.some(
        (existingItem) =>
          existingItem.name === result.name &&
          existingItem.category === result.category &&
          existingItem !== item
      );

      if (isDuplicate) {
        alert('Item with the same name and category already added. Please choose a different item.');
      } else {
        // Update the item
        const index = this.items.findIndex((existingItem) => existingItem === item);
        this.items[index] = { ...result };
      }
    }
  });
}
}
