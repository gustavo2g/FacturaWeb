import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable()
export class SesionService {

	private url:string="http://localhost:3000/sesion";

  constructor(private http: HttpClient) { 



  }


  getList(){
  	return this.http.get(this.url);
  }

   getJobs(_sesion){
  	return this.http.get(this.url+"/"+_sesion);
  }

  getConfig(_sesion,_job){

  	return this.http.get(this.url+"/"+_sesion+"/"+_job);
  }


}
