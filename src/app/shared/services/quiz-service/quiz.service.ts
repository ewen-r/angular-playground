/*
  © Copyright 2023-2023 E Reynolds, Inc. All rights reserved.

  This program is confidential and proprietary to E Reynolds, and
    may not be copied, reproduced, modified, disclosed to others, published or used,
    in whole or in part, without the express prior written permission.
*/

import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { dummyQuizzes } from '../../../dummy.data';
import { Quiz } from '../../interfaces/interfaces';

/** Service for managing Quizzes. */
@Injectable({
  providedIn: 'root'
})
export class QuizService {

  /** Name of this component. */
  readonly COMPONENT_NAME = 'QuizService';


  /** Class constructor.
    * @param {NGXLogger} logger Logger service (https://www.npmjs.com/package/ngx-logger).
  */
  constructor(private logger: NGXLogger) {
    this.logger.log(`${this.COMPONENT_NAME}: constructor():`);
  }


  /** Get a specific instance of quiz by uuid.
    * @param {string} uuid ID of the quiz to retrieve.
    * @returns {Quiz | null} Returns Quiz or null if error.
  */
  getQuizById(id: string): Quiz | null {
    this.logger.log(`${this.COMPONENT_NAME}: getQuizById():`, id);

    // Find quiz.
    const quizzes = dummyQuizzes.filter(
      q => q.uuid === id
    );

    // Return null if quiz was not found
    if (!quizzes.length) {
      this.logger.error(`${this.COMPONENT_NAME}: getQuizById(): Invalid quiz uuid`, id);
      return null;
    }

    return quizzes[0];
  }


}
