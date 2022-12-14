import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebmasterPanelService {
  constructor(private http : HttpClient , public router: Router) { }
  getAllusers(){
    return this.http.get(`${environment.urlBackend}`+'admin/')
  }
  deleteemployee(id:any){
    return this.http.delete(environment.urlBackend+'deleteemployee/' + id )
  }
  addnewemployee(data:any){
    return this.http.post<any>(environment.urlBackend + 'registrations/' , data)
  }
 
  updateemployee(id:string,newdata:any){
    return this.http.patch(environment.urlBackend+'updateemployeebyadmin/' + id , newdata )
  }
  updateadminprofil(id:string,newprofile:any){
    return this.http.patch(environment.urlBackend+'updateadmin/' + id , newprofile )
  }
  updateadminimage (id:string,newprofile:any){
    return this.http.patch(environment.urlBackend+'updateadminimage/' + id , newprofile )
  }

  countall(){
    return this.http.get<any>(`${environment.urlBackend}`+'countall/')
  }
    
    /////////////////////// Car Models 
    getallmodels(){
      return this.http.get(`${environment.urlBackend}`+'models/')
    }

    addmodel(data:any){
      return this.http.post(environment.urlBackend+'models/' , data) ;
    }

    deletemodel(id:any){
      return this.http.delete(environment.urlBackend+'models/' + id )
    }
  
    updatemodel(id:string,newdata:any){
      return this.http.patch(environment.urlBackend+'models/' + id , newdata )
    }
}