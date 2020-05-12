import { Component, OnInit } from '@angular/core';
import * as hijri from 'moment-hijri';
import * as moment from 'moment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myDate;
  myDate1;
  today;
  myDate2;

  constructor() { }

  ngOnInit(): void {
    this.myDate  = hijri().format('iYYYY/iM/iD'); // today

    this.myDate1  = hijri('2014-11-28 16:40:00', 'YYYY-M-D HH:mm:ss').endOf('iMonth').format('iYYYY/iM/iD HH:mm:ss');

    this.today = hijri().format('YYYY-MM-DD'); // today

    this.myDate2  = hijri(this.today, 'YYYY-M-D').endOf('iMonth').format('iYYYY/iM/iD'); // today
 }

}
