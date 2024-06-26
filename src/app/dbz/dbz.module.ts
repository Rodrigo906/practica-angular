import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddCharacterComponent } from './components/add-character/add-character.component';
import { ListComponent } from './components/list/list.component';
import { MainPageComponentComponent } from './pages/main-page.component/main-page.component.component';


@NgModule({
  declarations: [
    MainPageComponentComponent,
    AddCharacterComponent,
    ListComponent
  ],
  exports: [
    MainPageComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
