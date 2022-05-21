import { Component, OnInit } from '@angular/core';
import { BoxService } from 'src/app/services/box.service';
import { Box } from 'src/app/models/box';
@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  boxes: Array<Box> = [];
  box!: Box;
  constructor(private boxService : BoxService) { }

  ngOnInit(): void {
    /*
    this.boxService.getAllBoxes().subscribe(data =>
      { this.boxes=data;
  
      
        console.log(this.boxes);
        
      })
*/
}}
