import { Component, OnInit } from '@angular/core';
import { ContentService } from './services/content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  pages: any[] = [];

  constructor(
    readonly contentService: ContentService
  ) { }

  ngOnInit(): void {
    this.contentService.allPages().subscribe((response: any[]) => {
      console.log(response);
      this.pages = response;
    });
  }

}
