import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Card } from './components/card/card';
import { Home } from './layout/home/home';
import { Header } from './layout/header/header';
import { Navbar } from './components/navbar/navbar';
import { Profiletab } from './components/profiletab/profiletab';
import { Sidebar } from './components/sidebar/sidebar';
import { Footer } from './layout/footer/footer';

@NgModule({
  declarations: [App, Home, Header, Footer],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Card,
    Navbar,
    Profiletab,
    Sidebar,
    HttpClientModule,
    CommonModule,
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
