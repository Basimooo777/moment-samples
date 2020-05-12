import { Component, OnInit } from '@angular/core';
import * as hijri from 'moment-hijri';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  date: string;
  convertedDate: string;

  ngOnInit(): void {
    this.date = '';
  }

  convertDate(f: NgForm): void {
    this.convertedDate = hijri(f.value.date, 'D-M-YYYY').locale('en').format('iD-iM-iYYYY');
    return;
  }
}
