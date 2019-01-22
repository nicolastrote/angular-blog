import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page41Component } from './page41/page41.component';
import { Page42Component } from './page42/page42.component';
import { appRoutingModule } from './app-routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { Button } from 'protractor';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    Page2Component,
    Page3Component,
    Page41Component,
    Page42Component,
    HeaderComponent,
    SidenavListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    appRoutingModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
