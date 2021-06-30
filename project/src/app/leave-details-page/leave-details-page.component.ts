import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeaveService } from '../services/leave.service';


@Component({
  selector: 'app-leave-details-page',
  templateUrl: './leave-details-page.component.html',
  styleUrls: ['./leave-details-page.component.css']
})
export class LeaveDetailsPageComponent implements OnInit {
  public leaveData: any[] = []
  
  constructor(
  
    private router: Router,
    private leaveService: LeaveService
  
  ) { }

  ngOnInit(): void {
  
    if(!this.leaveService.getToken()) {
      this.router.navigate(["/login"])
  
    }
    this.fetchLeaveData();
  }  
  fetchLeaveData() { 
    let url= `${this.leaveService.getBaseURL()}api/leave/`
    this.leaveService.load(url).then((data:any) => {
      // console.log("data", data)
      if(data.data) {
        this.leaveData = data.data;
        // alert("Leave Created successfully")
      } else {
        alert("No leave data available")
        // this.router.navigate(["/login"])
      }
     
    })
  } 
  UpdateThisLeave(url:string) {
    this.leaveService.loadPut(url, body).then((data:any) => {
      // console.log("data", data)
      if(!data.error) {
        this.fetchLeaveData();
      }
    })
  }
  deleteThisLeave(id:Number) {
    this.leaveService.loadDelete(id).then((data:any) => {
      // console.log("data", data)
      if(!data.error) {
        this.fetchLeaveData();
      }
    })
  }

}
function body(url: string, body: any) {
  throw new Error('Function not implemented.');
}