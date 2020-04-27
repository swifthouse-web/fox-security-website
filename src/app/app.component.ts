import { Component, OnInit } from '@angular/core';
import { ContentService } from './services/content.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  pages: any[] = [];

  constructor(
    readonly contentService: ContentService,
    readonly router: Router
  ) { }

  ngOnInit(): void {
    this.contentService.allPages().subscribe((response: any[]) => {
      console.log(response);
      this.pages = response;
    });


  }

}
