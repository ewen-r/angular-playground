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
  userAnswers: string[] = [];

  numQuestions: number = 0;

  correctMsg: string = '0 (0%)';
  incorrectMessage: string = '0 (0%)';
  passedMessage: string = '0 (0%)';

  /** If true, shows summaryMessage about the quiz.. creator, date created etc.. */
  showMetadata = true;

  /** Summary of this quiz. */
  summaryMessage = '';

  /** High score message for this quiz. */
  highScoreMessage: string = 'No scores submitted';

  /** Class constructor.
    * @param {NGXLogger} logger Logger service (https://www.npmjs.com/package/ngx-logger).
  */
  constructor(private logger: NGXLogger) {
    this.logger.log(`${this.COMPONENT_NAME}: constructor():`);
  }


  /** Perform ngOnInit for this component.
    * - Calculate number of questions.
    * - Set page title.
    * - Set page sub-title.
    * - Create summaryMessage.
    * - Initialize user answers array.
  */
  ngOnInit() {
    this.logger.log(`${this.COMPONENT_NAME}: ngOnInit():`);

    // Calculate number of questions.
    this.numQuestions = this.quiz?.questions?.length ?? 0;

    if (this.quiz && this.numQuestions) {
      // Set page title.
      this.pageTitle = this.quiz?.title;

      // Set page sub-title.
      this.pageSubtitle = `${this.quiz.originatorInfo.username}`;
      this.pageSubtitle += this.quiz.originatorInfo?.createDate
        ? ` (${this.quiz.originatorInfo?.createDate})`
        : '';

      // Create summaryMessage.
      this.summaryMessage += this.quiz?.difficulty
        ? `${this.numQuestions} questions.  `
        : '';
      this.summaryMessage += this.quiz?.difficulty
        ? ` ${this.quiz?.difficulty} difficulty.  `
        : '';

      // Initialize user answers array.
      this.userAnswers = new Array(this.numQuestions);
      this.userAnswers.fill('pass');
      this.passedMessage = `${this.numQuestions} (100%)`;
    }
  }


  /** Handle result emitted from a question component.
    * - Store incoming answer in userAnswers array.
    * - Update user stats.
    * - Update on-screen messages.
    * @param {boolean} isCorrectAnswer True if user answered question correctly.
    * @param {number} index Index of question.
  */
  onResult(isCorrectAnswer: boolean, index: number) {
    this.logger.debug(`${this.COMPONENT_NAME}: onResult():`, index, isCorrectAnswer);

    // Store incoming answer in userAnswers array.
    this.userAnswers[index] = isCorrectAnswer ? 'correct' : 'incorrect';

    // Update user stats.
    const numCorrect: number = this.userAnswers.filter(
      a => a === 'correct').length;
    const numIncorrect: number = this.userAnswers.filter(
      a => a === 'incorrect').length;
    const numPassed: number = this.userAnswers.filter(
      a => a === 'pass').length;

    // Update on-screen messages.
    this.correctMsg = `${numCorrect} (
      ${String(
      Math.floor(100 * numCorrect / (this.numQuestions)))
      }%)`;
    this.incorrectMessage = `${numIncorrect} (
      ${String(
      Math.floor(100 * numIncorrect / (this.numQuestions)))
      }%)`;
    this.passedMessage = `${numPassed} (
      ${String(
      Math.floor(100 * numPassed / (this.numQuestions)))
      }%)`;

  }


}
