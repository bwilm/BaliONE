import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewUserComponent} from './new-user/new-user.component';
import { ServiceUserComponent } from './service-user/service-user.component';
import { ResourcesComponent } from './resources/resources.component';
import { TransportationComponent } from './transportation/transportation.component';
import { MultiDayComponent } from './multi-day/multi-day.component';
import { PurchaseComponent } from './purchase/purchase.component';


const routes: Routes = [
 { path: '', component: LoginComponent},
 { path: 'newuser', component: NewUserComponent},
 { path: 'serviceuser', component: ServiceUserComponent},
 { path: 'resources', component: ResourcesComponent},
 { path: 'transportation', component: TransportationComponent},
 { path: 'multiday',component: MultiDayComponent},
 { path: 'purchase',component: PurchaseComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
