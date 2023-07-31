import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { AuthInterceptorProviders } from './services/auth.interceptor';
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
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    AbdominalsComponent,
    ObliquesComponent,
    ForearmsComponent,
    BicepsComponent,
    ShouldersComponent,
    TrapsComponent,
    ChestComponent,
    QuadsComponent,
    ClavesComponent,
    HamstringsComponent,
    LowerBackComponent,
    GlutesComponent,
    LatsComponent,
    TrapsMiddleComponent,
    TricepsComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [AuthInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
