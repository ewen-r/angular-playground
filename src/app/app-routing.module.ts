/*
  © Copyright 2023-2023 E Reynolds, Inc. All rights reserved.

  This program is confidential and proprietary to E Reynolds, and
    may not be copied, reproduced, modified, disclosed to others, published or used,
    in whole or in part, without express prior written permission.
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { PageErrorComponent } from './components/page/page-error/page-error.component';
import { QuizComponent } from './components/quiz/quiz.component';


/** Routes. */
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quiz', component: HomeComponent },
  { path: 'quiz/:id', component: QuizComponent },
  { path: '**', component: PageErrorComponent, data: { message: 'Page not found!' } }
];


/** Module to handle routing logic.
*/
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }
