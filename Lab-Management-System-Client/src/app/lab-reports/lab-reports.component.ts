import { Component } from '@angular/core';
import { PatientsService } from '../sevrices/patients.service';

@Component({
  selector: 'app-lab-reports',
  templateUrl: './lab-reports.component.html',
  styleUrls: ['./lab-reports.component.css']
})
export class LabReportsComponent {
  /**
   *
   */
  constructor(private patientService: PatientsService) {
    
  }
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
    
    this.onSubmit();
  }
  patientForm: any;
  


  onSubmit() {
    const formData = {
      name: this.patientForm.value.name,
      age: this.patientForm.value.age,
      gender: this.patientForm.value.gender
    };
    
    this.patientService.postpatients(formData).subscribe(
      (response: any) => {
        console.log('Patient created successfully:', response);
        // Reset form if needed
        this.patientForm.reset();
      },
      (error: any) => {
        console.error('Error creating patient:', error);
        // Handle error, if needed
      }
    );
    }
}