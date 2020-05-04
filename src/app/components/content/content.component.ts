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
  gallery: any[];
  downloads: any[];

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
    page[0].page_content_primary = this.markdownService.compile(page[0].page_content_primary);
    page[0].page_content_secondary = this.markdownService.compile(page[0].page_content_secondary);

    this.page = page[0];

    this.titleService.setTitle(`Fox Security - ${this.page.page_title}`);
    this.meta.addTag({
      name: 'description',
      content: this.page.page_description
    });

    if (this.pageName === 'gallery') {
      this.contentService.getGalleries()
        .subscribe((response: any[]) => {
          this.gallery = response;
          this.gallery.forEach(x => {
            window.setTimeout(() => {
              this.showSlides(this.concat(x.gallery_name), 1);
            }, 11000);
          });
        });
    }

    if (this.pageName === 'downloads') {
      this.contentService.getDownloads()
        .subscribe((response: any[]) => this.downloads = response);
    }
  }

  contentUrl(url) {
    if (url) {
      return `${environment.cmsUrl}${url}`;
    }

    return '';
  }

  slideIndex = 1;

  // Next/previous controls
  plusSlides(name, n) {
    this.showSlides(name, this.slideIndex += n);
  }

  // Thumbnail image controls
  currentSlide(name, n) {
    this.showSlides(name, this.slideIndex = n);
  }

  showSlides(name, n) {
    let i;
    const slides = document.getElementsByClassName(name);
    const dots = document.getElementsByClassName(`${name}-dot`);

    if (n > slides.length) {
      this.slideIndex = 1;
    }

    if (n < 1) {
      this.slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      if (!slides[i].className.match(/(d-none)/)) {
        slides[i].className += ' d-none';
      }

    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(/(\sactive)/, '');
    }

    slides[this.slideIndex - 1].className.replace(/(\sd-none)/, '');
    dots[this.slideIndex - 1].className += ' active';
  }

  concat(str: string) {
    return str.replace(/(\s)/, '-');
  }

  count(arr: any[]) {
    return arr.length;
  }
}
