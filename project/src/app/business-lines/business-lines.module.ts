import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { businessLinesRoutes } from './business-lines.route';
import { BusinessLinesComponent } from './business-lines.component';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '@coreui/icons-angular';
import { ModalBodyComponent, ModalComponent, ModalFooterComponent, ModalHeaderComponent, ModalModule, ToastModule } from '@coreui/angular';
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        BusinessLinesComponent,

    ],
    imports: [
    CommonModule,
    RouterModule.forChild(businessLinesRoutes),
    FormsModule,
    ModalHeaderComponent,
    ModalFooterComponent,
    ModalComponent,
    ModalBodyComponent,
    ModalModule,
    IconComponent,
    SharedModule,
],
})
export class BusinessLinesModule { }
