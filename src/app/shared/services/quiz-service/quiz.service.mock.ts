/*
  © Copyright 2023-2023 E Reynolds, Inc. All rights reserved.

  This program is confidential and proprietary to E Reynolds, and
    may not be copied, reproduced, modified, disclosed to others, published or used,
    in whole or in part, without express prior written permission.
*/

import { Injectable } from '@angular/core';
import { QuizService } from './quiz.service';
import { HttpClient } from '@angular/common/http';
import { NGXLogger } from 'ngx-logger';
import { Observable, of } from 'rxjs';
import { dummyQuizzes } from 'src/app/dummy.data';
import { Quiz } from '../../interfaces/interfaces';


/** Mock QuizService. */
@Injectable()
export class QuizServiceMock extends QuizService {

  /** @inheritdoc */
  constructor(
    public override http: HttpClient,
    public override logger: NGXLogger) {

    // Call parent constructor.
    super(http, logger);
  }


  /** @inheritdoc */
  override getQuizById(id: string): Observable<Quiz | null> {
    this.logger.log(`MOCK ${this.COMPONENT_NAME}: getQuizById():`, id);

    // Find quiz.
    const quizzes = dummyQuizzes.filter(
      q => q.uuid === id
    );

    // Return null if quiz was not found
    if (!quizzes.length) {
      this.logger.error(`MOCK ${this.COMPONENT_NAME}: getQuizById(): Invalid quiz uuid`, id);
      return of(null);
    }

    return of(quizzes[0]);

  };

}

