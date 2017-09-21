import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AsideComponent } from './aside/aside.component';


// ROUTES -----------------------------------------------------
const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  
];

//-------------------------------------------------------------


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    AsideComponent,

  ],
  imports: [
     BrowserModule,
     RouterModule.forRoot(appRoutes),
     HttpClientModule,
     NgbModule.forRoot(),

  ],
  providers:[],
  bootstrap: [AppComponent]
})

export class AppModule { }
