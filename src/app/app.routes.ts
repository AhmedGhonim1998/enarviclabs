import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import {Solutions} from './pages/solutions/solutions';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'solutions', component: Solutions }
];
