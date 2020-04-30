import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from 'src/app/services/content.service';
import { Title, Meta } from '@angular/platform-browser';
import { MarkdownService } from 'ngx-markdown';
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  pageName = 'home';
  page: any;
  offers: any[] = [];

  constructor(
    readonly router: Router,
    readonly contentService: ContentService,
    readonly titleService: Title,
    readonly meta: Meta,
    readonly markdownService: MarkdownService
  ) { }

  ngOnInit() {
    this.contentService.byPageName(this.pageName)
      .subscribe(response => this.applyPage(response));

    this.contentService.getOffers()
      .subscribe((response: any[]) => this.offers = response);
  }

  applyPage(page) {
    page[0].page_content_primary = this.markdownService.compile(page[0].page_content_primary);
    page[0].page_content_secondary = this.markdownService.compile(page[0].page_content_secondary);

    this.page = page[0];

    this.titleService.setTitle(`Fox Security - ${this.page.page_title}`);
    this.meta.addTag(
      {
        name: 'description',
        content: this.page.page_description
      }
    );
  }

  contentUrl(url) {
    if (url) {
      return `${environment.cmsUrl}${url}`;
    }

    return '';
  }

}
