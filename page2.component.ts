import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/assets/service.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
page2: FormGroup

  constructor( public router: Router,private fb:FormBuilder,private http:ServiceService ) { 
    this.page2 = this.fb.group({
      username: new FormControl(''),
      password: new FormControl('')
    })
   }

  ngOnInit() {
  }
  login(){
    this.router.navigateByUrl('movies')
  }
open(data){
  console.log(data)
    this.http.registerlogin(data).subscribe(data1 => {
      console.log("4", data1)
    })
}
}
