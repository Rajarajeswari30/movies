import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/assets/service.service';


@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  page1: FormGroup

  constructor(private router: Router, private build: FormBuilder, private http: ServiceService) {
    this.page1 = this.build.group({
      username: new FormControl(),
      password: new FormControl(),
      confirm: new FormControl()
    })

  }

  ngOnInit() {
  }
  log() {
    this.router.navigateByUrl("page2")
  }
  open(data) {
    console.log(data)
    this.http.register(data).subscribe(data1 => {
      console.log("2", data1)
    })
    
  }
}
