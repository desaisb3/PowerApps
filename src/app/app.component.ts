import { setAppHeight } from '@amc-technology/davinci-api';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit{
  title = 'PowerApps';

  ngOnInit(){
    setAppHeight(50, false);
  }
}
