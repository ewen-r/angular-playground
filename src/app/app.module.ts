/*
  © Copyright 2023-2023 E Reynolds, Inc. All rights reserved.

  This program is confidential and proprietary to E Reynolds, and
    may not be copied, reproduced, modified, disclosed to others, published or used,
    in whole or in part, without the express prior written permission.
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoggerModule.forRoot({ level: NgxLoggerLevel.FATAL })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
