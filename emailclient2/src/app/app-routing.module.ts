import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { SigninComponent } from './auth/signin/signin.component';
import { HomeComponent } from './inbox/home/home.component';

const routes: Routes = [
  {
    path: 'inbox',
    loadChildren: () => import('./inbox/inbox.module').then(mod => mod.InboxModule),
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: SigninComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthRoutingModule],
  exports: [RouterModule],
  providers: [AuthService, AuthGuard],
})
export class AppRoutingModule { }
