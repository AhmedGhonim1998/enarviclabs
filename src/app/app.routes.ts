import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import {Solutions} from './pages/solutions/solutions';
import { Approach } from './pages/approach/approach';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'solutions', component: Solutions },
  { path: 'approach', component: Approach }
];
