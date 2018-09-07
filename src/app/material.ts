import { MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, MatFormFieldModule, MatProgressSpinnerModule, MatDividerModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
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
        MatSelectModule,
        MatGridListModule,
        MatToolbarModule,
        MatIconModule
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
        MatSelectModule,
        MatGridListModule,
        MatToolbarModule,
        MatIconModule
    ],
})
export class MaterialModule { }