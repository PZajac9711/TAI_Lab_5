import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ContactComponent} from "./components/contact/contact.component";
import {BlogComponent} from "./components/blog/blog.component";
import {BlogItemDetailsComponent} from "./components/blog-item-details/blog-item-details.component";
import {BlogHomeComponent} from "./components/blog-home/blog-home.component";
import {AddPostComponent} from "./components/add-post/add-post.component";
import {AuthGuard} from "./services/auth.guard";
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";


const routes: Routes = [{
  path: 'home',
  component: HomeComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'blog',
    component: BlogHomeComponent
    //,
    //     canActivate: [AuthGuard]
  },
  {
    path: 'blog/detail/:id',
    component: BlogItemDetailsComponent
  },
  {
    path: 'add-post',
    component: AddPostComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sign',
    component: SignupComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
