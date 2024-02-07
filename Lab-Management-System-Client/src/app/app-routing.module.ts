import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PatientsComponent } from './patients/patients.component';
import { LabReportsComponent } from './lab-reports/lab-reports.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'LabReports',component:LabReportsComponent},
  {path:'Patients', component:PatientsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
