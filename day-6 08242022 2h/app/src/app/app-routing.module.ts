import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { PanierComponent } from './pages/panier/panier.component';
import { ProduitsComponent } from './pages/produits/produits.component';


const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:'home', component:ProduitsComponent },
  { path:'panier', component:PanierComponent },
  { path:'about', component:AboutComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
