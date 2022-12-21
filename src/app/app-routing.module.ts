import { NgModule, Pipe } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { ColoursComponent } from './colours/colours.component';
import { CompanyComponent } from './company/company.component';
import { IconComponent } from './icon/icon.component';
import { PipeComponent } from './pipe/pipe.component';
import { PostsComponent } from './posts/posts.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RoutingComponent } from './routing/routing.component';
import { TemplatedrivenformsComponent } from './templatedrivenforms/templatedrivenforms.component';
import { VegetablesComponent } from './vegetables/vegetables.component';

const routes: Routes = [
  {path:'routing',
   component:RoutingComponent},
  {path:'forms',
   component:ReactiveFormComponent},
   {path:'posts',
   component:PostsComponent},
   {path:'vegetables',
   component:VegetablesComponent},
   {path:'pipe',
   component:PipeComponent},
   {path:'templatedrivenforms',
   component:TemplatedrivenformsComponent},
   {path:'colours',
   component:ColoursComponent},
   {path:'company/:id/:name/:brightness',
   component:CompanyComponent},
   {path: 'angular-material',
   component:AngularMaterialComponent},
   {path: 'icon',
   component:IconComponent},
  
   
   ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
