import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { RegisterComponent } from './components/register/register.component';
import { AbdominalsComponent } from './components/abdominals/abdominals.component';

import { BicepsComponent } from './components/biceps/biceps.component';
import { ObliquesComponent } from './components/obliques/obliques.component';
import { ForearmsComponent } from './components/forearms/forearms.component';
import { ShouldersComponent } from './components/shoulders/shoulders.component';
import { TrapsComponent } from './components/traps/traps.component';
import { ChestComponent } from './components/chest/chest.component';
import { QuadsComponent } from './components/quads/quads.component';
import { ClavesComponent } from './components/claves/claves.component';
import { HamstringsComponent } from './components/hamstrings/hamstrings.component';
import { LowerBackComponent } from './components/lower-back/lower-back.component';
import { GlutesComponent } from './components/glutes/glutes.component';
import { LatsComponent } from './components/lats/lats.component';
import { TrapsMiddleComponent } from './components/traps-middle/traps-middle.component';
import { TricepsComponent } from './components/triceps/triceps.component';

const routes: Routes = [
  {path:'home', component:HomeComponent, pathMatch:'full', canActivate:[NormalGuard]},
  {path:'admin', component:AdminComponent, pathMatch:'full', canActivate:[AdminGuard]},
  {path:'', component:LoginComponent},
  {path:'register', component:RegisterComponent},

  // ====================================================================================== //
                                  /*
                                      Pages     
                                  */
  // ====================================================================================== //
  {path:'abdominals', component:AbdominalsComponent, pathMatch:'full', canActivate:[NormalGuard]},
  {path:'obliques', component:ObliquesComponent, pathMatch:'full', canActivate:[NormalGuard]},
  {path:'forearms', component:ForearmsComponent, pathMatch:'full', canActivate:[NormalGuard]},
  {path:'biceps', component:BicepsComponent, pathMatch:'full', canActivate:[NormalGuard]},
  {path:'shoulders', component:ShouldersComponent, pathMatch:'full', canActivate:[NormalGuard]},
  {path:'traps', component:TrapsComponent, pathMatch:'full', canActivate:[NormalGuard]},
  {path:'chest', component:ChestComponent, pathMatch:'full', canActivate:[NormalGuard]},
  {path:'quads', component:QuadsComponent, pathMatch:'full', canActivate:[NormalGuard]},
  {path:'claves', component:ClavesComponent, pathMatch:'full', canActivate:[NormalGuard]},
  {path:'hamstrings', component:HamstringsComponent, pathMatch:'full', canActivate:[NormalGuard]},
  {path:'lowerBack', component:LowerBackComponent, pathMatch:'full', canActivate:[NormalGuard]},
  {path:'glutes', component:GlutesComponent, pathMatch:'full', canActivate:[NormalGuard]},
  {path:'lats', component:LatsComponent, pathMatch:'full', canActivate:[NormalGuard]},
  {path:'traps_middle', component:TrapsMiddleComponent, pathMatch:'full', canActivate:[NormalGuard]},
  {path:'triceps', component:TricepsComponent, pathMatch:'full', canActivate:[NormalGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
