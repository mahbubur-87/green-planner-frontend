import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { SignupPageRoutingModule } from './signup-page-routing.module';
import { StepsModule } from 'primeng/steps';
import { TicketService } from './ticketservice';
import {PersonalComponent} from './personal/personal.component';
import {ConfirmationComponent} from './confirmation/confirmation.component';
import {MoreComponent} from './more/more.component';
import {SignupPageComponent} from './signup-page.component';
import {ToastModule} from 'primeng/toast';
import {CardModule} from 'primeng/card';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {MessageService} from 'primeng/api';

@NgModule({
  imports: [
    CommonModule,
    SignupPageRoutingModule,
    StepsModule,
    ToastModule,
    CardModule,
    FormsModule,
    ButtonModule,
    DropdownModule
  ],
  declarations: [
    SignupPageComponent,
    MoreComponent,
    ConfirmationComponent,
    PersonalComponent,
  ],
  providers: [
    TicketService,
    MessageService
  ]
})
export class SignupPageModule {}
