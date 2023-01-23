import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebmasterPanelService } from 'src/app/service/webmaster-panel.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-employees',
  templateUrl: './manage-employees.component.html',
  styleUrls: ['./manage-employees.component.css']
})
export class ManageEmployeesComponent implements OnInit {
  counter:any
  addnewemployee! :  FormGroup;
  messageErr="" ;
  image:any;
  submitted : boolean = false ;
  dataArray:any = []
  p:number = 1 ;

  //categories :Category[] = [] ;
  messageSuccess = '' ;
  model_car_name: string ="" ;
  searchedKeyword!:string;

  datamodel={
    id : '',
    model_car_name:'',
  }
  update! :  FormGroup;
  constructor(private usersService:WebmasterPanelService,private route:Router) { 
    this.update = new FormGroup({
      firstname:new FormControl('', [Validators.required]),
      lastname:new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
    this.addnewemployee = new FormGroup({
      email: new FormControl('', [Validators.required]),
      firstname:new FormControl('', [Validators.required]),
      lastname:new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      role:new FormControl('', [Validators.required])
    });
  }
  ngOnInit(): void {
    this.usersService.getallemployees().subscribe(data=>{
      // debugger
      
      this.dataArray=data 
      console.log(this.dataArray)
      if(this.dataArray !=null && this.dataArray <=0 ){
        this.counter = this.dataArray.length
      }(err:HttpErrorResponse)=>{
      this.messageErr="We dont't found this category in our database"} 
    }) 
  }

  key = 'id' ;
  reverse: boolean = false ;

  sort(key: string) {
    this.key = key ;
    this.reverse = !this.reverse ;
  }
  details(id:any){
    this.route.navigate(['/categories/'+id])
  }

  delete(id:any  , i :number){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.usersService.deletemodel(id).subscribe(response=>{
          this.dataArray.splice(i,1)   
        })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })

    
  }

  getdata(model_car_name:string,id:any){
    this.messageSuccess=''
    this.datamodel.model_car_name= model_car_name 
  
    this.datamodel.id= id 

  }
  fileChange(event:any) {
    this.image =event.target.files[0];
    
  }
  
  updatenewmodel(f:any){
    let data=f.value
    const formData = new FormData();
    formData.append('model_car_name', this.update.value.model_car_name);
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.usersService.updatemodel(this.datamodel.id,formData).subscribe(response=>
          {
          this.submitted = true ;
            let indexId=this.dataArray.findIndex((obj:any)=>obj.id==this.datamodel.id)
    
            //this.dataArray[indexId].id=data.id
            this.dataArray[indexId].model_car_name=data.model_car_name
       
            this.messageSuccess=`this name : ${this.dataArray[indexId].name} is updated`
            window.location.reload();
           this.route.navigate(['/categories']);
          
          },(err:HttpErrorResponse)=>{
          
          })
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })


}
addnewemployees (f:any){
  const formData = new FormData();
  formData.append('model_car_name', this.addnewemployee.value.model_car_name);
  let data=f.value
  
  
  this.usersService.addmodel(formData).subscribe( ()=>{
      window.location.reload();
      Swal.fire('Saved!', '', 'success')
    this.route.navigate(['/categories'])

  },(err:HttpErrorResponse)=>{
    this.messageErr=err.error

     
  }) ;
}
fileChangeadd(event:any) {
  this.image =event.target.files[0]; 
}


}