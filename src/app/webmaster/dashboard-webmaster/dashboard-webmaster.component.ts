import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthSystemService } from 'src/app/service/auth-system.service';

@Component({
  selector: 'app-dashboard-webmaster',
  templateUrl: './dashboard-webmaster.component.html',
  styleUrls: ['./dashboard-webmaster.component.css']
})
export class DashboardWebmasterComponent implements OnInit {
  counter:any
  dataArray:any = [] ;
  messageErr =''

  constructor(private usersService:AuthSystemService,private route:Router ) { }

  ngOnInit(): void {
  }
getallusers()
{
  this.usersService.getAllusers().subscribe(data=>{
    this.dataArray=data
    console.log(this.dataArray)
    
    this.counter = this.dataArray.length , (err:HttpErrorResponse)=>{
    this.messageErr="We dont't found this user in our database"} 
  }) 
}
}
