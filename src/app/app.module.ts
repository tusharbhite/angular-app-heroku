import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TypingComponent } from './typing/typing.component';
import { LoaderComponent } from './loader/loader.component';
import { ThanksComponent } from './thanks/thanks.component';
import { AccordionComponent } from './accordion/accordion.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardsComponent } from './cards/cards.component';
import { CardTwoComponent } from './card-two/card-two.component';
import { TypewriterComponent } from './typewriter/typewriter.component';

@NgModule({
  declarations: [
    AppComponent,
    TypingComponent,
    LoaderComponent,
    ThanksComponent,
    AccordionComponent,
    CarouselComponent,
    CardsComponent,
    CardTwoComponent,
    TypewriterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
