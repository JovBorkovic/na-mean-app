import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AngularMaterialModule } from "../angular-material.module";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./signup/sign-up.component";

    
@NgModule({
    declarations: [
        SignUpComponent,
        LoginComponent
    ],
    imports: [
        AngularMaterialModule,
        CommonModule,
        RouterModule,
        FormsModule,
        AuthRoutingModule
    ],
    exports: [
    ]
})
export class AuthModule {}