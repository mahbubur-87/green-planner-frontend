import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { amadeusApiConfig, woosmapApiConfig, railKitApiConfig } from "./app.config";
import { NavigationComponent } from './components/navigation/navigation.component';
import { ApiManagerModule } from './services/api-manager';
import { WOOSMAP_CONFIG_TOKEN } from "./services/woosmap/woosmap.tokens";
import { RAILKIT_API_MANAGER_CONFIG_TOKEN } from './services/train-itineraries/train-itineraries.tokens';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TicketService } from './pages/signup-page/ticketservice';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {CheckboxModule} from 'primeng/checkbox';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginPageComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ApiManagerModule.forRoot(amadeusApiConfig),
        MatListModule,
        MatIconModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        CheckboxModule
    ],
  providers: [
    TicketService,
    {provide: WOOSMAP_CONFIG_TOKEN, useValue: woosmapApiConfig},
    {provide: RAILKIT_API_MANAGER_CONFIG_TOKEN, useValue: railKitApiConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
