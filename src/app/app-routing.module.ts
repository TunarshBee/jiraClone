import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BoardComponent } from './pages/board/board.component';
import { NavComponent } from './pages/nav/nav.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {path: '*', redirectTo:'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: '', component: NavComponent, children:[
    {path: 'projects', component:ProjectsComponent},
    {path: 'board', component:BoardComponent},
    {path: 'users', component:UsersComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }