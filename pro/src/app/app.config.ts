import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { LearningWayPipe } from './learning-way.pipe';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideClientHydration(), provideHttpClient(withFetch()),LearningWayPipe]
};
