import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {SignupPageComponent} from './signup-page.component';
import {PersonalComponent} from './personal/personal.component';
import {ConfirmationComponent} from './confirmation/confirmation.component';
import {MoreComponent} from './more/more.component';



@NgModule({
  imports: [RouterModule.forChild([{path:'',component: SignupPageComponent, children:[
      {path:'', redirectTo: 'personal', pathMatch: 'full'},
      {path: 'personal', component: PersonalComponent},
      {path: 'confirmation', component: ConfirmationComponent},
      {path: 'more', component: MoreComponent}
    ]
  }])
  ],
  exports: [RouterModule]
})
export class SignupPageRoutingModule {
}
