import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllportsComponent } from './allports/allports.component';

const routes: Routes = [
  {path:'ports', component: AllportsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
