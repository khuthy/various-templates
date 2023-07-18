import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllModulesRoutingModule } from './all-modules-routing.module';
import { AllModulesComponent } from './all-modules.component';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { ThemeSettingComponent } from './theme-setting/theme-setting.component';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AllModulesComponent,
    HeaderComponent,
    SidebarComponent,
    ThemeSettingComponent,
    Error404Component,
    Error500Component,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
  ],
  imports: [CommonModule, AllModulesRoutingModule, SharedModule],
})
export class AllModulesModule {}
