import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewUserComponent} from './new-user/new-user.component';
import { ServiceUserComponent } from './service-user/service-user.component';
import { ResourcesComponent } from './resources/resources.component';


const routes: Routes = [
 { path: '', component: LoginComponent},
 { path: 'newuser', component: NewUserComponent},
 { path: 'serviceuser', component: ServiceUserComponent},
 { path: 'resources', component: ResourcesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
