/*
  © Copyright 2023-2023 E Reynolds, Inc. All rights reserved.

  This program is confidential and proprietary to E Reynolds, and
    may not be copied, reproduced, modified, disclosed to others, published or used,
    in whole or in part, without the express prior written permission.
*/

import { Component, Input } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { Quiz } from 'src/app/shared/interfaces/interfaces';


/** Component for managing Quizzes.
 */
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {

  /** Name of this component. */
  readonly COMPONENT_NAME = 'QuizComponent';

  /** Input item is a Quiz object. */
  @Input() quiz: Quiz | null = null;

  /** Page title. */
  pageTitle: string = '';

  /** Page sub-title. */
  pageSubtitle = '';

  /** User's results for each question. */
  userAnswers: boolean[] = [];

  /** Number of correct answers. */
  numCorrect: number = 0;

  /** If true, shows metadata about the quiz.. creator, date created etc.. */
  showMetadata = true;

  /** Metadata about this quiz. */
  metadata = '';


  /** Class constructor.
    * @param {NGXLogger} logger Logger service (https://www.npmjs.com/package/ngx-logger).
  */
  constructor(private logger: NGXLogger) {
    this.logger.log(`${this.COMPONENT_NAME}: constructor():`);
  }


  /** Perform ngOnInit for this component.
    * - Set page title.
    * - Set page sub-title.

    * - Create metadata.
  */
  ngOnInit() {
    this.logger.log(`${this.COMPONENT_NAME}: ngOnInit():`);

    if (this.quiz) {
      // Set page title.
      this.pageTitle = this.quiz?.title;

      // Set page sub-title.
      this.pageSubtitle = `by ${this.quiz.originatorInfo.username}`;

      // Create metadata.
      this.metadata += this.quiz?.difficulty
        ? `${this.quiz?.questions?.length} questions.  `
        : '';
      this.metadata += this.quiz?.difficulty
        ? `Difficulty: ${this.quiz?.difficulty}.  `
        : '';
      this.metadata += this.quiz.originatorInfo?.username
        ? `Created by: ${this.quiz.originatorInfo?.username}`
        : '';
      this.metadata += this.quiz.originatorInfo?.createDate
        ? ` ${this.quiz.originatorInfo?.createDate}`
        : '';
    }
  }


  /** Handle result emitted from a question component.
    * @param {boolean} isCorrectAnswer True if user answered question correctly.
    * @param {number} index Index of question.
  */
  onResult(isCorrectAnswer: boolean, index: number) {
    this.logger.debug(`${this.COMPONENT_NAME}: onResult():`, index, isCorrectAnswer);
    this.userAnswers[index] = isCorrectAnswer;

    this.numCorrect = this.userAnswers.filter(a => a).length;
  }


}
