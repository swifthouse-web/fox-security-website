import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from "./components/main/main.component";
import { ContentComponent } from "./components/content/content.component";
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { RouterModule } from '@angular/router';
import { ContentService } from './services/content.service';
import { LogicAppService } from './services/logic-app.service';

const COMMON_COMPONENTS = [
  MainComponent,
  ContentComponent,
  ContactUsComponent
];

@NgModule({
  declarations: [
    AppComponent,
    ...COMMON_COMPONENTS
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    MarkdownModule.forRoot()
  ],
  providers: [ContentService, LogicAppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
