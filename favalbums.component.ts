import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-favalbums',
  templateUrl: './favalbums.component.html',
  styleUrls: ['./favalbums.component.css']
})
export class FavalbumsComponent implements OnInit {
search='';
public moviedata1=[{MovieName:"Manam",Language:"Telugu",Genre:"Romance"},
                   {MovieName:"Kathi",Language:"Tamil",Genre:"Action"}]
value: Object;
myid="5d722f66c79df20007be6010";
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
    
      this.http.get('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/favourite_album/'+this.myid).subscribe(data =>{
        console.log("1",data)
  })
    }
  addmovie(){
    this.router.navigateByUrl('movies')
  }
}