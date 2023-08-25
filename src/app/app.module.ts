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
import { PageHeaderComponent } from './components/page/page-header/page-header.component';
import { PageFooterComponent } from './components/page/page-footer/page-footer.component';
import { QuestionComponent } from './components/question/question.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { FormsModule } from '@angular/forms';
import { QuizService } from './shared/services/quiz-service/quiz.service';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { PageNotFoundComponent } from './components/page/page-not-found/page-not-found/page-not-found.component';

/** Routes. */
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quiz', component: HomeComponent },
  { path: 'quiz/:id', component: QuizComponent },
  { path: '**', component: PageNotFoundComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    PageFooterComponent,
    QuestionComponent,
    QuizComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LoggerModule.forRoot({ level: NgxLoggerLevel.FATAL }),
    RouterModule.forRoot(routes)
  ],
  providers: [
    QuizService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
