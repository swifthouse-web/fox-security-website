import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ContentComponent } from './components/content/content.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'home',
    component: MainComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'services',
    component: ContentComponent
  },
  {
    path: 'gallery',
    component: ContentComponent
  },
  {
    path: 'downloads',
    component: ContentComponent
  },
  {
    path: '**',
    redirectTo: ''
  }];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
