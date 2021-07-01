import { not } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalaryService } from '..//salary-service.service';



@Component({
  selector: 'app-salary-details-page',
  templateUrl: './salary-details-page.component.html',
  styleUrls: ['./salary-details-page.component.css']
})
export class SalaryDetailsPageComponent implements OnInit {

  public salaryData: any[] = []


  constructor(private router: Router,
    private salaryService: SalaryService) { }

  ngOnInit(): void {

    if(!this.salaryService.getToken()) {
      this.router.navigate(["/login"])
    }

    this.fetchSalaryData();

    
  }


  fetchSalaryData() { 
    let url= `${this.salaryService.getBaseURL}api/employee_salary/`
    this.salaryService.load(url).then((data:any) => {
      // console.log("data", data)
      if(data.data) {
        this.salaryData = data.data;
        // alert("Salary amended successfully")
      } else {
        alert("Login to view the employees")
        this.router.navigate(["/login"])
      }
     
    })
    
  }
  UpdateThisSalary(url:string) {
    this.salaryService.loadPut(url, body).then((data:any) => {
      // console.log("data", data)
      if(!data.error) {
        this.fetchSalaryData();
      }
    })
  }
  deleteThisSalary(url:string) {
    this.salaryService.loadDelete(url).then((data:any) => {
      // console.log("data", data)
      if(!data.error) {
        this.fetchSalaryData();
      }
    })
  }

}
function body(url: string, body: any) {
  throw new Error('Function not implemented.');


}
