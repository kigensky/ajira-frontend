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



  constructor(private LeaveServiceService:LeaveServiceService,
    private http:HttpClient) { }

  ngOnInit(): void {
  }

}
