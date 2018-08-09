import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthUserService } from '../auth-user.service';
import { Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgModel } from '@angular/forms';
import { UserDetails} from '../user-details';
import { Alert } from '../../../node_modules/@types/selenium-webdriver';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  AddChannel : string;
  SearchChannel : string;

  AddButtonClicked(str){
    this.AuthObject.AddChannel(str).subscribe(res => 
      { 
        console.log(res); 
      }),
      err => {
        console.log(err);
      }
  }
  MyVar : string;
  SearchButtonClicked(str){
    this.AuthObject.DisplayAllChannel().subscribe(res => 
      { 
        this.length = res.channels.length;
        for ( let i = 0; i < this.length; i++){
          if (str === res.channels[i].unique_name ) {
            this.MyVar = res.channels[i].unique_name;
            break;
            }
          else {
            this.MyVar="Channel not found";
            console.log("Searched Group not found");
          }}
      }),
      err => {
        console.log(err);
      }
  }
  constructor(private AuthObject : AuthUserService, private http : HttpClient) { }
User = new UserDetails;
  ngOnInit(){
   
}  
     
    length : number;
    msgArr = [];
            
          
    Send(str) {
          this.AuthObject.SendMessage(str).subscribe(res => 
                    { 
                      console.log(res);
                    }),
                    err => {
                      console.log(err);
                    }
             } 
             
    History() {
          this.AuthObject.ShowAllMessages().subscribe(res => 
                    { 
                      this.length = res.messages.length;
                      console.log(res);
                      for ( let i = 0; i < this.length; i++){ 
                        
                      this.msgArr[i] = res.messages[i].body +'(' + res.messages[i].from + ')'; }
                    }),
                    err => {
                      console.log(err);
                    }
             }     
    }
      
