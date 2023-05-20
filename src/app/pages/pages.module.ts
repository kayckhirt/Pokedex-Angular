import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

// Module Routing
import { RoutingModule } from './routing.module';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../shared/shared.module';
import { NormalizeTextPipe } from './normalize-text.pipe';



@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    NormalizeTextPipe
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule,
  ]
})
export class PagesModule { }
