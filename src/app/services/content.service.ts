import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(readonly http: HttpClient) { }

  allPages() {
    return this.http.get(`${environment.cmsUrl}/pages/?_sort=id:asc`);
  }

  pageById(id) {
    return this.http.get(`${environment.cmsUrl}/pages/${id}/`);
  }

  byPageName(name) {
    return this.http.get(`${environment.cmsUrl}/pages/?page_name_eq=${name}`);
  }

  getDefaults() {
    return this.http.get(`${environment.cmsUrl}/defaults/`);
  }

  getDownloads() {
    return this.http.get(`${environment.cmsUrl}/downloads/`);
  }

  getOffers() {
    return this.http.get(`${environment.cmsUrl}/offers/`);
  }

  getGalleries() {
    return this.http.get(`${environment.cmsUrl}/galleries/`);
  }

}
