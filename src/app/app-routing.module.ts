import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SecondPageChildComponent } from './second-page/second-page-child/second-page-child.component';

const appRoutes: Routes = [{ path: 'page1', title: 'App Page 1', component: FirstPageComponent },
                           { path: 'page2', title: 'App Page 2', component: SecondPageComponent, children: [{ path: 'page2-child', title: 'App Page 2 Child', component: SecondPageChildComponent }] },
                           { path: '', redirectTo: 'page1', pathMatch: 'full' },
                           { path: '**', component: PageNotFoundComponent}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
