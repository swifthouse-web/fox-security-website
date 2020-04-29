import { Component, OnInit } from '@angular/core';
import { ContentService } from './services/content.service';
import { Router } from '@angular/router';
import { environment } from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  pages: any[] = [];
  default: any = undefined;

  constructor(
    readonly contentService: ContentService,
    readonly router: Router
  ) { }

  ngOnInit(): void {
    this.contentService.getDefaults().subscribe((defaults: any) => {
      console.log(defaults);
      this.default = defaults;
    });

    this.contentService.allPages().subscribe((response: any[]) => {
      console.log(response);
      this.pages = response;
    });
  }

  contentUrl(url) {
    if (url)
      return `${environment.cmsUrl}${url}`;

    return '';
  }

}
