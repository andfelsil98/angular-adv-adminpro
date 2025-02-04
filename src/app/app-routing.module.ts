//Modules
import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
//Components
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [
  {path:'', redirectTo:'/dashboard', pathMatch: 'full'},
  {path:'**', component: NopagefoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
