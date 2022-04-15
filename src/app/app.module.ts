import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TypingComponent } from './typing/typing.component';
import { LoaderComponent } from './loader/loader.component';
import { ThanksComponent } from './thanks/thanks.component';
import { AccordionComponent } from './accordion/accordion.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    TypingComponent,
    LoaderComponent,
    ThanksComponent,
    AccordionComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
