import { Component, OnInit } from '@angular/core';
import { Division } from '../model/division.model';
import { DivisionService } from '../services/division.service';

@Component({
  selector: 'app-divisions',
  templateUrl: './divisions.component.html',
  styleUrls: ['./divisions.component.css']
})
export class DivisionsComponent implements OnInit {

  divisions?:Division[];
  currentDivision:Division={};
  name='';
  constructor(private divisionService:DivisionService) { }

  ngOnInit(): void {
    this.retrieveDivision()
  }

  retrieveDivision():void{
    this.divisionService.getAll()
    .subscribe(
      data=>{
        this.divisions=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    )
  }
}
