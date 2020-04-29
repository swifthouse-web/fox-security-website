import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from 'src/app/services/content.service';
import { Title, Meta } from '@angular/platform-browser';
import { MarkdownService } from 'ngx-markdown';
import { environment } from "../../../environments/environment";
import { LogicAppService } from 'src/app/services/logic-app.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  pageName = this.router.url.replace('/', '');
  page: any;

  constructor(
    readonly router: Router,
    readonly contentService: ContentService,
    readonly titleService: Title,
    readonly meta: Meta,
    readonly markdownService: MarkdownService,
    readonly logicAppService: LogicAppService
  ) { }

  sent = false;

  form = {
    address: '',
    email: '',
    message: '',
    messageType: '',
    mobile: '',
    name: '',
  };

  ngOnInit() {
    this.pageName = this.router.url.replace('/', '');

    this.contentService.byPageName(this.pageName)
      .subscribe(response => this.applyPage(response));
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
    if (url)
      return `${environment.cmsUrl}${url}`;

    return '';
  }

  submit() {
    this.logicAppService.sendMail(this.form)
      .subscribe(() => {
        this.sent = true;

        this.form.address = '';
        this.form.email = '';
        this.form.message = '';
        this.form.messageType = '';
        this.form.mobile = '';
        this.form.name = '';
      });
  }

}
