import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule,
  MatCheckboxModule, MatChipsModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule, MatListModule,
  MatNativeDateModule,
  MatToolbarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { WaitingBeerComponent } from './waiting-beer/waiting-beer.component';
import { IconSliderComponent } from './icon-slider/icon-slider.component';

import 'hammerjs';
import {NguCarouselModule} from '@ngu/carousel';
import {AgmCoreModule, GoogleMapsAPIWrapper} from '@agm/core';
import { StreetviewDirective } from './streetview.directive';
import { PlaceDetailsComponent } from './place-details/place-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuButtonComponent,
    WaitingBeerComponent,
    IconSliderComponent,
    StreetviewDirective,
    PlaceDetailsComponent
  ],
  imports: [
    NguCarouselModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatChipsModule,
    MatCardModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDN92F7AIQGeSTqE6emuFOstLzhgNdwTDE'
    })
  ],
  providers: [GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule {
}
