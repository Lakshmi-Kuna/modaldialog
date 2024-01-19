import { Component, Inject, Optional} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  constructor(
    public dialogRef: MatDialogRef<EditComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: { item: any } | any
  ) {}
 
  onSubmit() {
    // Add your logic to update the item
    this.dialogRef.close(this.data.item);
  }

  onCancel() {
    this.dialogRef.close();
  }
}

