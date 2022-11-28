import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AuthSystemService } from 'src/app/service/auth-system.service';
import { WebmasterPanelService } from 'src/app/service/webmaster-panel.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public connecte : boolean = false ;

  messageError:any
  messageErr =''
  addemployee =  new FormGroup({
    email:new FormControl(),
    password:new FormControl(),
    password_confirmation:new FormControl()
  })

  user : User ={
    email:'',
    password:'',
    password_confirmation:'',
    role:''
  }

  constructor(private Auth:AuthSystemService,private route:Router) { }

  ngOnInit(): void {
  }


  gettoken(){
    
  }
  addnewemployee (f:any){
    const data = {
      user :{
        email:this.user.email,
        password:this.user.password,
        password_confirmation:this.user.password_confirmation,
        role : 0 
      }
    };
   this.Auth.register(data).subscribe( 
    Response=>{
      console.log(Response)
      Swal.fire('Saved!', '', 'success')
      window.location.reload()
  
    },(err:HttpErrorResponse)=>{
      this.messageErr=err.error      
    }) ;
  }

  
}