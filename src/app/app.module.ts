import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { EmplistComponent } from './component/emplist/emplist.component';
import { CreateempComponent } from './component/createemp/createemp.component';
import { EmployeeService } from './share/emp.ser';
import { DisplayEmpComponent } from './component/display-emp/display-emp.component'
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
const appRoutes: Routes = [
  { path: 'list', component: EmplistComponent },
  { path: '', redirectTo: '/list', pathMatch: "full" },
  {path: 'edit/:id', component: CreateempComponent},
  {path: 'pagenotfound', component: PageNotFoundComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    EmplistComponent,
    CreateempComponent,
    DisplayEmpComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    FormsModule,

    RouterModule.forRoot(
      appRoutes
    )

  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
