import { ProfileService } from './../../service/profile.service';
import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/interfaces/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Profile[] = [];

  constructor(private profileservice: ProfileService) { }

  findProfiles() {
    this.profileservice.fetchProfileApi().subscribe(
      (res) => {
        this.profile = res;

      }, (error: any) => {
        console.error(error);
      }
    );
  }

  ngOnInit(): void {
  }

}
