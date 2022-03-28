import { Component, OnInit } from '@angular/core';
import { PatientsServiceService } from '../patients-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-wellcome-component',
  templateUrl: './wellcome-component.component.html',
  styleUrls: ['./wellcome-component.component.css']
})
export class WellcomeComponentComponent implements OnInit {

constructor(private service:PatientsServiceService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
}
