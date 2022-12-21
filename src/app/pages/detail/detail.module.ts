import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailRoutingModule } from './detail-routing.module'
import { DetailComponent } from './detail.component';

const components = [DetailComponent]
const modules = [CommonModule,
    DetailRoutingModule]

@NgModule({
    declarations: [
        ...components,
    ],
    imports: [... modules]
})
export class DetailModule {}