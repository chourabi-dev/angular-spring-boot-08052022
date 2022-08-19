import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { AuthComponent } from './pages/auth/auth.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HistoricComponent } from './pages/historic/historic.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TeamComponent } from './pages/team/team.component';


const routes: Routes = [
  { path:'' , redirectTo:'home', pathMatch:'full' },
  //{ path:'' , component:HomePageComponent },

  { path:'auth', component:AuthComponent  },



  { path:'home', component:HomePageComponent, canActivate:[AuthGuard] },


  { path:'about', component:AboutPageComponent , canActivate:[AuthGuard] , children:[
    { path:'team', component:TeamComponent },
    { path:'historic', component:HistoricComponent },
    
  ]  },




  { path:'contact-us', component:ContactUsComponent, canActivate:[AuthGuard] },
  
  // WILD CARD
  { path:'**', component:NotFoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
