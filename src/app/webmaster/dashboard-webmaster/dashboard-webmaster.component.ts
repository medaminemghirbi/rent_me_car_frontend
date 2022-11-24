import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthSystemService } from 'src/app/service/auth-system.service';
import { WebmasterPanelService } from 'src/app/service/webmaster-panel.service';

@Component({
  selector: 'app-dashboard-webmaster',
  templateUrl: './dashboard-webmaster.component.html',
  styleUrls: ['./dashboard-webmaster.component.css']
})
export class DashboardWebmasterComponent implements OnInit {
  counter:any
  dataArray:any = [] ;
  messageErr =''

  constructor(private adminservice:WebmasterPanelService,private route:Router ) { }

  ngOnInit(): void {
  }
getallusers()
{
  this.adminservice.getAllusers().subscribe(data=>{
    this.dataArray=data
    console.log(this.dataArray)
   if(this.dataArray !=null && this.dataArray <=0 ){
      this.counter = this.dataArray.length
      console.log(this.counter)
    } 
     (err:HttpErrorResponse)=>{
    this.messageErr="We dont't found this user in our database"} 
  }) 
}
}
