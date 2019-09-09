import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map"
import "rxjs/Rx"

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  base = 'https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/users'
  base1=  'https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/authenticate'
  
 
  constructor(private http: HttpClient) { }
  register(data) {
    let body = {
      name: data.username,
      password: data.password,
      confirmpassword: data.confirm
    }
    
    if(data.password==data.confirm){
      return this.http.post(this.base,body).map(data => {
        console.log("1", data)
      })
    }
    else{
        alert("Check Requirements");
    }
  }
  registerlogin(data){
    let body1 = {
      name: data.username,
      pass: data.password
    }
    return this.http.post(this.base1, body1).map(data =>{
      console.log("3",data)
    })
  }

  movies(body){
    let movie={
      id:'5d722f66c79df20007be6010',
      mname:body.mname,
      lang:body.lang,
      genre:body.genre
    }
    return this.http.post('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/add_movies',
    body).map(data =>{
      console.log("1",data)
    })
  }

}
