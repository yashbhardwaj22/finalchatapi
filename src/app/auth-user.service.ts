import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { Data } from './data';
import { pipe } from '../../node_modules/@angular/core/src/render3/pipe';
import { map } from 'rxjs/operators';
import { UserDetails } from './user-details';


@Injectable({
  providedIn: 'root'
})

export class AuthUserService {
  User=new UserDetails();
  httpOptions = {
    headers : new HttpHeaders ({
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization' : 'Basic QUMzYjA0Y2FlZDM5NWI1MTUwOTA3OWJmMjk3Yzg5N2RlMjo4MTAwN2EwMmFhNGViZGQ4Y2RlZGI4MmY2NTE4ODA3Yg=='
    })
  };
 
 UserName : string = 'AC3b04caed395b51509079bf297c897de2';
 Password : string = '81007a02aa4ebdd8cdedb82f6518807b';
 ServiceId : string =  'IS4d55d353b5eb4275b6ba0999faa1a56f';
url = 'https://chat.twilio.com/v2/Services'
  constructor(private http : HttpClient) {  this.User = JSON.parse(localStorage.getItem("key"));  
  
  }
  SetData():Observable<any> {
    return this.http.post(this.url,'FriendlyName=yashservice', this.httpOptions);
  }
  CreateChannel():Observable<any> {
    return this.http.post('https://chat.twilio.com/v2/Services/IS4d55d353b5eb4275b6ba0999faa1a56f/Channels', 'UniqueName=General', this.httpOptions);
  }
  DisplayAllChannel():Observable<any> {
    return this.http.get('https://chat.twilio.com/v2/Services/IS4d55d353b5eb4275b6ba0999faa1a56f/Channels', this.httpOptions);
  }
  AddChannel(str):Observable<any> {
    return this.http.post('https://chat.twilio.com/v2/Services/IS4d55d353b5eb4275b6ba0999faa1a56f/Channels', 'UniqueName='+str, this.httpOptions);
  }
  AddRole():Observable<any> {
    return this.http.post('https://chat.twilio.com/v2/Services/IS4d55d353b5eb4275b6ba0999faa1a56f/Roles',  'FriendlyName=yash1&Permission=createChannel&Type=deployment', this.httpOptions);
  }
  // AddUser(str):Observable<any> {
  //   return this.http.post('https://chat.twilio.com/v2/Services/IS6fc5291ab2ed4d1c8327dff1f2c0408b/Channels/CH5daad0a180c347da8c05516400916fb7/Members/'+str,  'ChannelSid=CH5daad0a180c347da8c05516400916fb7&ServiceSid=IS6fc5291ab2ed4d1c8327dff1f2c0408b&RoleSid=RLc56c50eeb2234e2a84586e23c433d95d', this.httpOptions);
  // }
  AddUser(str):Observable<any> {
    return this.http.get('https://chat.twilio.com/v2/ServicesIS4d55d353b5eb4275b6ba0999faa1a56f/Users/'+str, this.httpOptions);
  }
  SendMessage(str):Observable<any> {
    return this.http.post('https://chat.twilio.com/v2/Services/IS4d55d353b5eb4275b6ba0999faa1a56f/Channels/CH5825006352154f47b10bd555828acdcb/Messages',  'ChannelSid=CH5825006352154f47b10bd555828acdcb&ServiceSid=IS4d55d353b5eb4275b6ba0999faa1a56f&From='+this.User.email+'&Body='+str, this.httpOptions);
  }
  ShowAllMessages():Observable<any> {
    return this.http.get('https://chat.twilio.com/v2/Services/IS4d55d353b5eb4275b6ba0999faa1a56f/Channels/CH5825006352154f47b10bd555828acdcb/Messages', this.httpOptions);
  }

  }
  
  

