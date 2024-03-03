import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Characters } from 'src/app/model/characters';
import { Status, Gender } from 'src/app/model/enums';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  characters!: Characters;
 
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Characters,
  ) {}

  ngOnInit(): void {
  }

  getEnumGender(value:string){
    return Gender[value as keyof typeof Gender];
  }

  getEnumStatus(value:string){
    return Status[value as keyof typeof Status];
  }
  
}
