import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthSystemService } from 'src/app/service/auth-system.service';
import { WebmasterPanelService } from 'src/app/service/webmaster-panel.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-profil',
  templateUrl: './admin-profil.component.html',
  styleUrls: ['./admin-profil.component.css']
})
export class AdminProfilComponent implements OnInit {
  webmasterdata:any;
  upadate!: any;
  messageSuccess: any;
  image: any;
  imageupdate!: any;
  constructor(private route:Router, private webmasterservice:WebmasterPanelService) 
  {
    this.webmasterdata = JSON.parse( sessionStorage.getItem('webmasterdata') !) ;
    this.imageupdate = new FormGroup({ avatar: new FormControl('', [Validators.required]), });
    this.upadate = new FormGroup({
       firstname: new FormControl('', [Validators.required]),
       lastname: new FormControl('', [Validators.required]),
       email: new FormControl('', [Validators.required]),
       adress: new FormControl('', [Validators.required]),
       password: new FormControl('', [Validators.required]),

     });
 
   }
   
   updateadminprofil (f:any){
    let data=f.value
    const formData = new FormData();
    formData.append('firstname', this.upadate.value.firstname);
    formData.append('lastname', this.upadate.value.lastname);
    formData.append('email', this.upadate.value.email);
    formData.append('adress', this.upadate.value.adress);
    formData.append('password', this.upadate.value.password);

    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        debugger
    this.webmasterservice.updateadminprofil(this.webmasterdata.id,formData).subscribe(response=>
      {
        
        sessionStorage.setItem( 'webmasterdata', JSON.stringify( response ) );
        window.location.reload();
        let indexId=this.webmasterdata.findIndex((obj:any)=>obj.id==this.webmasterdata.id)

        this.webmasterdata[indexId].email=data.email
        this.webmasterdata[indexId].firstname=data.firstname
        this.webmasterdata[indexId].lastname=data.lastname
        this.webmasterdata[indexId].adress=data.adress
        this.webmasterdata[indexId].password=data.password

        this.messageSuccess=`this email : ${this.webmasterdata[indexId].email} is updated`

      },(err:HttpErrorResponse)=>{
      })
     this.route.navigate(['/dashboard-RH']);
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }





  fileChange(event:any) {
    this.image =event.target.files[0];   
  }
  updateimage(f:any){
    let data=f.value
    const imageformadata = new FormData();
    imageformadata.append('avatar', this.image );
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        console.log(data)
        
        this.webmasterservice.updateadminimage(this.webmasterdata.id,imageformadata).subscribe(response=>
          {
            
            
            sessionStorage.setItem( 'webmasterdata', JSON.stringify( response ) );
            window.location.reload();
         
    
          },(err:HttpErrorResponse)=>{
          
          })
    //   this.route.navigate(['/dashbord-freelancer']);
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
    
  } 

















  ngOnInit(): void {
  }

}