import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AuthSystemService } from 'src/app/service/auth-system.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public connecte : boolean = false ;

  messageError:any

  registerForm =  new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  })

  user : User ={
    email:'',
    password:'',
  }

  constructor(private Auth:AuthSystemService,private route:Router) { }

  ngOnInit(): void {
  }


  gettoken(){
    
  }
  login(){

    const data = {
      user :{
        email:this.user.email,
        password:this.user.password,
      }


    };
    
    alert(data.user.email+' '+ data.user.password );
    /*
    debugger
    this.Auth.login(data).subscribe(
      response => {
        console.log(response);
        if(response.status==401){
     
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'User Not Found Or invalide Credentialns'
          })
        }else{


       if(response.user.email_confirmed==true) {
        if(response.logged_in ==true && response.user.role =="admin"  ){ 
          sessionStorage.setItem( 'webmasterdata', JSON.stringify( response.user ) );
          console.log(response);
          this.route.navigate(['/dashboard-webmaster']);
        }
        else if(response.logged_in ==true && response.user.role =="employee")
        {
          sessionStorage.setItem( 'clientdata', JSON.stringify( response.user ) );
          this.route.navigate(['/dashboard-client']);
        }
        else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Email or Password is Incorrect!'
          })
        }
       }else{
     
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'account created but not confirmed!, check Your EMail'
          })
        }
       
      }
     
      },(err:HttpErrorResponse)=>this.messageError=err.error.error);
      
    */  }

  
}