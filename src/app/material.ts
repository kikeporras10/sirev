import { MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, MatFormFieldModule, MatProgressSpinnerModule, MatDividerModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatDividerModule,
        MatGridListModule,
        MatToolbarModule,
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatDividerModule,
        MatGridListModule,
        MatToolbarModule,
    ],
})
export class MaterialModule { }