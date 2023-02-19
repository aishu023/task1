import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CrimeComponent } from './crime/crime.component';
import { PoliticsComponent } from './politics/politics.component';
import { BuisnessNewsComponent } from './buisness-news/buisness-news.component';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';
import { WorldComponent } from './world/world.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { InfoPipe } from './info-pipe';

const allLinks:Routes = [
    
  {path:'BusinessNews',component:BuisnessNewsComponent},
  {path:'Politics',component:PoliticsComponent},
  {path:'Crime',component:CrimeComponent},
  {path:'World',component:WorldComponent},
  {path:'Technology',component:TechnologyComponent},
  {path:'Sports',component:SportsComponent},
  {path:'newsDetail/:category',component:ViewDetailsComponent},
  
  
  
]

@NgModule({
  declarations: [
    AppComponent,
    
    HeaderComponent,
    CrimeComponent,
    PoliticsComponent,
    BuisnessNewsComponent,
    SportsComponent,
    TechnologyComponent,
    WorldComponent,ViewDetailsComponent,InfoPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(allLinks)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
