import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from '../app-routing.module';

const components = [HeaderComponent]
const modules = [CommonModule, AppRoutingModule]

@NgModule({
    declarations: [...components],
    imports: [...modules],
    exports: [...components]
  })
  export class CoreModule {}