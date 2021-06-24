import { LeaveServiceService } from './../../service/leave-service.service';
import { LeaveForm } from './../../interfaces/leave-form';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.component.html',
  styleUrls: ['./leave-form.component.css']
})
export class LeaveFormComponent implements OnInit {
  leave: any;



  constructor(private LeaveServiceService:LeaveServiceService,
    private http:HttpClient) { }

    Fetchleave(){
      this.LeaveServiceService.FetchleaveApi().subscribe(
        response =>{
          this.leave = response
        },
        (error) => {
          console.error(error)
        }
      );

    }

    onSubmit(LeaveForm:any) {
      this.LeaveServiceService.create(LeaveForm).subscribe((result) =>{
        console.warn('result',result);

      });
      console.warn(LeaveForm)
    }

  ngOnInit(): void {
  }

}
