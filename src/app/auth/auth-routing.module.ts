import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/sign-up.component';

const routes = [
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: SignUpComponent}
]

@NgModule({
    declarations: [
    ],
    imports: [
        RouterModule.forChild(routes)

    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutingModule {}