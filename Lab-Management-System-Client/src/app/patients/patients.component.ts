import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../sevrices/patients.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
    patientsData:any;
  
    constructor(private patientsService: PatientsService) { }
  
    ngOnInit(): void {
      // Call the patients() method from PatientsService to fetch patient data
      // this.patientsService.patients().subscribe(
      //   (data:any) => 
      //   {
      //     this.patientsData = data;
      //   },
      //   (error) => {
      //     console.error('Error fetching patients:', error);
      //   }
      // );
      this.getPatients();
      
    }

    getPatients(){
      this.patientsService.patients().subscribe((data) =>{
        console.log('data',data);
        this.patientsData = data;

      })
    }

}
