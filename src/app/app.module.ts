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


@NgModule({
  declarations: [
    AppComponent,
    MenuButtonComponent,
    WaitingBeerComponent,
    IconSliderComponent
  ],
  imports: [
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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
