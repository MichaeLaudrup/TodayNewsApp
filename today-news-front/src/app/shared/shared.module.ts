import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TextInputComponent } from './components/forms-component/text-input/text-input.component';
import { TextAreaComponent } from './components/forms-component/text-area/text-area.component';

const components = [FooterComponent, HeaderComponent, TextInputComponent,TextAreaComponent]
@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    ...components
  ]
})
export class SharedModule { }
