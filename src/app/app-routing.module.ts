import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page41Component } from './page41/page41.component';
import { Page42Component } from './page42/page42.component';

const routes: Routes=[
    { path: '', component: HomeComponent},
    { path: 'page2', component: Page2Component},
    { path: 'page3', component: Page3Component},
    { path: 'page41', component: Page41Component},
    { path: 'page42', component: Page42Component},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class appRoutingModule {

}