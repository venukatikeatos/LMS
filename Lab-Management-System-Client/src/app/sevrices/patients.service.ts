import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  url='https://localhost:7239/Patient';
  
  constructor(private http:HttpClient) 
  {
    
  }
    patients():Observable<any>
      {
        return this.http.get(this.url);
      }
      // postpatients():Observable<any>
      // {
      //   return this.http.post(this.url,);
      // }

      postpatients(patientData: any): Observable<any> {
        return this.http.post(this.url, patientData);
      }

}
