import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from 'src/app/services/content.service';
import { Title, Meta } from '@angular/platform-browser';
import { MarkdownService } from 'ngx-markdown';
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  pageName = this.router.url.replace('/', '');
  page: any;

  constructor(
    readonly router: Router,
    readonly contentService: ContentService,
    readonly titleService: Title,
    readonly meta: Meta,
    readonly markdownService: MarkdownService
  ) { }

  ngOnInit() {
    this.pageName = this.router.url.replace('/', '');

    this.contentService.byPageName(this.pageName)
      .subscribe(response => this.applyPage(response));
  }


  applyPage(page) {
    page[0].page_content = this.markdownService.compile(page[0].page_content);

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
    if (url)
      return `${environment.cmsUrl}${url}`;

    return '';
  }

}