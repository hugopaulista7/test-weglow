import { NgModule } from '@angular/core';
import { LoadingButtonComponent } from './loading-button/loading-button.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [IonicModule.forRoot(), CommonModule],
  declarations: [LoadingButtonComponent],
  exports: [LoadingButtonComponent],
})
export class ComponentsModule {}
