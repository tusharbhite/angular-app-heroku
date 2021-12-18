import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { CarouselComponent } from './carousel/carousel.component';
import { ToastComponent } from './toast/toast.component';
import { WarningComponent } from './warning/warning.component';
import { CardGroupComponent } from './card-group/card-group.component';
import { FooterComponent } from './footer/footer.component';
import { LinkListComponent } from './link-list/link-list.component';
import { TopTemComponent } from './top-tem/top-tem.component';

const routes: Routes = [
  { path: 'home', component: NavigationComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CarouselComponent,
    ToastComponent,
    WarningComponent,
    CardGroupComponent,
    FooterComponent,
    LinkListComponent,
    TopTemComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
