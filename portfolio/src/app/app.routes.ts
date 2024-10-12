import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { JobsComponent } from '../pages/jobs/jobs.component';
import { AboutComponent } from '../pages/about/about.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { ProjectComponent } from '../pages/project/project.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
      },
      {
        path: 'jobs',
        component: JobsComponent,
        pathMatch: 'full',
      },
      {
        path: 'about',
        component: AboutComponent,
        pathMatch: 'full',
      },
      {
        path: 'contact',
        component: ContactComponent,
        pathMatch: 'full',
      },
      {
        path: 'projects',
        component: ProjectComponent,
        pathMatch: 'full',
      }
];
