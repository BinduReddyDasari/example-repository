import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { ChildComponent } from './child/child.component';
import { PipeComponent } from './pipe/pipe.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { FamilyComponent } from './family/family.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { BindingsComponent } from './bindings/bindings.component';
import { TemplatedrivenformsComponent } from './templatedrivenforms/templatedrivenforms.component';
import { RoutingComponent } from './routing/routing.component';
import { AppRoutingModule } from './app-routing.module';
import { ColoursComponent } from './colours/colours.component';
import { CompanyComponent } from './company/company.component';
import { MatSelectModule } from '@angular/material/select';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { IconComponent } from './icon/icon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    VegetablesComponent,
    ChildComponent,
    PipeComponent,
    SwitchCaseComponent,
    FamilyComponent,
    FormsComponent,
    ReactiveFormComponent,
    PostsComponent,
    BindingsComponent,
    TemplatedrivenformsComponent,
    RoutingComponent,
    ColoursComponent,
    CompanyComponent,
    AngularMaterialComponent,
    IconComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
