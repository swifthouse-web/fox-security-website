import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LogicAppService {

  constructor(readonly http: HttpClient) { }

  sendMail(request) {
    return this.http.post(environment.sendMailLogicApp, request, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

}
