import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components Shared
import { NavbarComponent } from '../navbar/navbar.component';
import { AboutComponent } from '../about/about.component';
import { CardPostComponent } from '../card-post/card-post.component';

// Material Module
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    NavbarComponent,
    AboutComponent,
    CardPostComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    NavbarComponent,
    AboutComponent,
    CardPostComponent
  ]
})
export class SharedModule { }
