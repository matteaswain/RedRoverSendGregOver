import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { E404Component } from './misc/e404/e404.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

const routes: Routes = [

  {path:'', redirectTo:'/user/list', pathMatch:'full'},

  {path:'login', component: UserLoginComponent},

  {path:'user/list', component: UserListComponent},
  {path:'user/detail/:id', component: UserDetailComponent},
  {path:'user/create', component: UserCreateComponent},
  {path:'user/edit/:id', component: UserEditComponent},


  
  {path:'**', component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
