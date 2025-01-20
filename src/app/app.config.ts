import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { MessageService } from 'primeng/api';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), MessageService]
};
