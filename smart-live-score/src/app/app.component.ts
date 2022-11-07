import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Partita } from './models/partita';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  partite: Partita[] = [];
  constructor(private http: HttpClient) {

  }
  ngOnInit() {
    
  }


}
