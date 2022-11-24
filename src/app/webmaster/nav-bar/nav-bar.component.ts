import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthSystemService } from 'src/app/service/auth-system.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  searchedKeyword!:string;
  

  messageErr:any;
  webmasterdata:any;
  constructor(private route:Router, private servicesService:AuthSystemService) {
  this.webmasterdata = JSON.parse( sessionStorage.getItem('webmasterdata') !);

}
  ngOnInit(): void {
  
  }
  logout(){
  
    //this.servicesService.logout();
    this.route.navigate(['']);
   
  }
}