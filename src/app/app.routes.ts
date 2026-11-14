import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import {Solutions} from './pages/solutions/solutions';
import { Company } from './pages/company/company';
import { Approach } from './pages/approach/approach';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'solutions', component: Solutions },
  { path: 'company', component: Company },
  { path: 'approach', component: Approach}
];
