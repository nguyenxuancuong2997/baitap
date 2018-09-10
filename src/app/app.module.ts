import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CoreServiesComponent } from './core-servies/core-servies.component';
import { OtherComponent } from './other/other.component';
import { AmazingComponent } from './amazing/amazing.component';
import { AnbumComponent } from './anbum/anbum.component';
import { AboutComponent } from './about/about.component';
import { AwesomeTeamComponent } from './awesome-team/awesome-team.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      CoreServiesComponent,
      OtherComponent,
      AmazingComponent,
      AnbumComponent,
      AboutComponent,
      AwesomeTeamComponent,
      FooterComponent
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
