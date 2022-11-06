import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  constructor(private http: HttpClient) {

  }
  ngOnInit() {
    const sheetno="o6isq5z";
    const sheetid = "1GLoPM2OKSGQPypZeBL3uCl4diAi4YXLye-LrXIx4jr4";
    //https://docs.google.com/spreadsheets/d/1HFhi9MoJdxN4ZqDoiIna7xyFXWQhs0KD1qh0VcXEJOk/edit?usp=sharing
  }

  public getCSVData(sheetno: string, sheetid: string): Observable<any[]> {
     const url = 
`https://spreadsheets.google.com/feeds/list/${sheetid}/${sheetno}/public/values?alt=json`;
    
        return this.http.get<any>(url)
          .pipe(
            map((res: any) => {
              const data = res.feed.entry as any[];
    
              const returnArray: Array<any> = [];
              if (data && data.length > 0) {
                data.forEach(entry => {
                  const obj = {};
                  for (const x in entry) {
                    console.log(x);
                  }
                  returnArray.push(obj);
                });
              }
              return returnArray;
            })
          );
      }



}
