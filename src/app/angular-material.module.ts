import { NgModule } from "@angular/core";
import {
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatExpansionModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
  } from "@angular/material";

@NgModule({
    imports: [
        MatInputModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        MatExpansionModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatDialogModule
    ],
    exports: [
        MatInputModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        MatExpansionModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatDialogModule
    ],
    declarations: [],
    providers: [],
})
export class AngularMaterialModule {}