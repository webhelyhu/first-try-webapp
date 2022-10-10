import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MESSAGE.....';
  constructor(private http: HttpClient) {
    this.http.get('/api/message')
      .subscribe((resp: any) => this.title = resp.text);
  }
}
