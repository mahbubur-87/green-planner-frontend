import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfilePageComponent} from './profile-page.component';
import {ProfilePageRoutingModule} from './profile-page-routing.module';
import {TabViewModule} from 'primeng/tabview';
import {SplitterModule} from 'primeng/splitter';
import {AvatarModule} from 'primeng/avatar';
import {CheckboxModule} from 'primeng/checkbox';
import {FormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {TagModule} from 'primeng/tag';
import {ProgressBarModule} from 'primeng/progressbar';
import {ChipModule} from 'primeng/chip';



@NgModule({
  declarations: [
    ProfilePageComponent,
  ],
  imports: [
    CommonModule,
    ProfilePageRoutingModule,
    TabViewModule,
    SplitterModule,
    AvatarModule,
    CheckboxModule,
    FormsModule,
    TableModule,
    TagModule,
    ProgressBarModule,
    ChipModule
  ]
})
export class ProfilePageModule { }
