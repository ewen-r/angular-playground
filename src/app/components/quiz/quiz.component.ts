/*
  © Copyright 2023-2023 E Reynolds, Inc. All rights reserved.

  This program is confidential and proprietary to E Reynolds, and
    may not be copied, reproduced, modified, disclosed to others, published or used,
    in whole or in part, without express prior written permission.
*/

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { QuestionResult } from 'src/app/shared/interfaces/enums';
import { Quiz } from 'src/app/shared/interfaces/interfaces';
import { QuizService } from 'src/app/shared/services/quiz-service/quiz.service';


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

  /** Quiz data. */
  quiz: Quiz | null = null;

  /** Page title. */
  pageTitle: string = '';

  /** Page sub-title. */
  pageSubtitle = '';

  /** User's results for each question. */
  private userAnswers: QuestionResult[] = [];

  /** Number of questions in this quiz. */
  private numQuestions: number = 0;

  /** On-screen message. */
  correctMsg: string = '0 (0%)';
  /** On-screen message. */
  incorrectMessage: string = '0 (0%)';
  /** On-screen message. */
  passedMessage: string = '0 (0%)';

  /** Summary of this quiz. */
  summaryMessage = '';

  /** High score message for this quiz. */
  highScoreMessage: string = 'No scores submitted';


  /** Class constructor.
    * @param {NGXLogger} logger Logger service (https://www.npmjs.com/package/ngx-logger).
    * @param {QuizService} quizService Quiz service for managing Quizzes.
    * @param {ActivatedRoute} route Route service used to parse page route.
  */
  constructor(
    private logger: NGXLogger,
    private quizService: QuizService,
    private route: ActivatedRoute) {
    this.logger.log(`${this.COMPONENT_NAME}: constructor():`);
  }


  /** Perform ngOnInit for this component.
    * - Get uuid of quiz from route.
    * - Retrieve required quiz.
    * - Calculate number of questions.
    * - Set page title.
    * - Set page sub-title.
    * - Create summaryMessage.
    * - Initialize user answers array.
  */
  ngOnInit() {
    this.logger.log(`${this.COMPONENT_NAME}: ngOnInit():`);

    // Get uuid of quiz from route.
    const quizId: string | null = this.route.snapshot.paramMap.get('id');

    // Retrieve required quiz.
    if (quizId == null) {
      this.logger.error(`${this.COMPONENT_NAME}: ngOnInit(): Invalid quizId`);
      return;
    }
    this.quiz = this.quizService.getQuizById(quizId);

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
      this.userAnswers.fill(QuestionResult.PASS);
      this.passedMessage = `${this.numQuestions} (100%)`;
    }
  }


  /** Handle result emitted from a question component.
    * - Store incoming answer in userAnswers array.
    * - Calculate user stats.
    * - Update on-screen messages.
    * @param {QuestionResult} answer True if user answered question correctly.
    * @param {number} index Index of question.
  */
  onResult(answer: QuestionResult, index: number) {
    this.logger.debug(`${this.COMPONENT_NAME}: onResult():`, index, answer);

    // Store incoming answer in userAnswers array.
    this.userAnswers[index] = answer;

    // Calculate user stats.
    const numCorrect: number = this.userAnswers.filter(
      a => a === QuestionResult.CORRECT).length;
    const numIncorrect: number = this.userAnswers.filter(
      a => a === QuestionResult.INCORRECT).length;
    const numPassed: number = this.userAnswers.filter(
      a => a === QuestionResult.PASS).length;

    // Update on-screen messages.
    this.correctMsg = `${numCorrect} (
      ${Math.floor(100 * numCorrect / (this.numQuestions))}%)`;
    this.incorrectMessage = `${numIncorrect} (
      ${Math.floor(100 * numIncorrect / (this.numQuestions))}%)`;
    this.passedMessage = `${numPassed} (
      ${Math.floor(100 * numPassed / (this.numQuestions))}%)`;

  }


}
