import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from './pages/login-page/login-page.component';

const routes: Routes = [
  {path: 'home', loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule)},
  {path: 'profile', loadChildren: () => import('./pages/profile-page/profile-page.module').then(m => m.ProfilePageModule)},

  {
    path: 'inspire',
    loadChildren: () => import('./pages/inspire-page/inspire-page.module').then(m => m.InspirePageModule)
  },
  {path: 'search', loadChildren: () => import('./pages/search-page/search-page.module').then(m => m.SearchPageModule)},
  { path: 'TrainItineraries', loadChildren: () => import('./pages/train-itineraries/train-itineraries.module').then(m => m.TrainItinerariesModule) },
  { path: 'Signup', loadChildren: () => import('./pages/signup-page/signup-page.module').then(m => m.SignupPageModule) },
  { path: 'Login', component: LoginPageComponent },
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
