import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private service: HttpClient) {}
  title = 'Search your Image';

  orientations: any = [
    { value: 'landscape', viewValue: 'landscape' },
    { value: 'portrait', viewValue: 'portrait' },
    { value: 'squarish', viewValue: 'squarish' },
  ];

  myKey = 'HDHRkbYTckPzkf4KvP-1mT8vqUa9t6yyiSEjNAC3oM0';
  public result: any = [];
  public query: any = [];
  public color: any;
  public orientation: any;
  errorMessage: string = '';

  downloadPhotos(keyword: any, orient: any, color: any) {
    this.service
      .get(
        `https://api.unsplash.com/search/photos?client_id=${this.myKey}&page=5&per_page=42&query=${keyword}=${orient}&color=${color}`
      )
      .subscribe({
        next: (x: any) => {
          this.result = x.results;
          if (this.result[0].length == 0) {
            this.errorMessage = 'Nothing found, try to search something else';
          }
        },
      });
  }
}
