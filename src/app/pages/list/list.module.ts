import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const components = [ListComponent]
const modules = [CommonModule,
    ListRoutingModule, SharedModule, ReactiveFormsModule, FormsModule]

@NgModule({
    declarations: [
        ...components,
    ],
    imports: [...modules]
})
export class ListModule {}