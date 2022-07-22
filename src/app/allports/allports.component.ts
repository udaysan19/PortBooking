import { Component, OnInit } from '@angular/core';
import { PortService } from '../port.service';

@Component({
  selector: 'app-allports',
  templateUrl: './allports.component.html',
  styleUrls: ['./allports.component.scss']
})
export class AllportsComponent implements OnInit {

  public ports:any;

  constructor(private service:PortService) { }

  ngOnInit(): void {
    this.getports();
  }

  private getports():void{
    this.service.getPorts().subscribe(result=>{this.ports=result;});
  }

}
