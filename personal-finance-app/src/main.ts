import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/pages/fxf-login/fxf-login.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
localStorage.setItem('Theme', 'dark');
