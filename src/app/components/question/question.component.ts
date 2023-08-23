/*
  © Copyright 2023-2023 E Reynolds, Inc. All rights reserved.

  This program is confidential and proprietary to E Reynolds, and
    may not be copied, reproduced, modified, disclosed to others, published or used,
    in whole or in part, without the express prior written permission.
*/


import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { QuestionType } from 'src/app/shared/interfaces/enums';
import { Question } from 'src/app/shared/interfaces/interfaces';


/** A unique ID number which is incremented for each instance of this component. */
let uniqueId: number = 0;

/** Component to add/modify a question.
*/
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  /** Name of this component. */
  readonly COMPONENT_NAME = 'QuestionComponent';

  /** Unique prefix for id and name of HTML Elements in this component.
    * This prevents unwanted side effects when there are clashes.
    * e.g when the component is included more than one time on the page.
    * */
  uniquePrefix = `${this.COMPONENT_NAME}_${uniqueId++}`;

  /** Index number of this question. */
  @Input() index: number | null = null;

  /** Input question. */
  @Input() question: Question | null = null;

  /** Outputs whether user was correct or incorrect. */
  @Output() result: EventEmitter<boolean> = new EventEmitter();

  /** The correct answer to this question. */
  correctAnswerMessage: string = '';

  /** Set to true when user submits their answer */
  answerSubmitted: boolean = false;

  /** Whether user's submitted answer is correct.
    * Initially null until an answer is submitted. */
  answerSubmittedResult: boolean | null = null;

  /** Enum accessor method for QuestionType (Allows enum to be used in template). */
  public get QuestionType(): typeof QuestionType {
    return QuestionType;
  }


  /** Class constructor.
    * @param {NGXLogger} logger Logger service (https://www.npmjs.com/package/ngx-logger).
  */
  constructor(private logger: NGXLogger) {
    this.logger.log(`${this.COMPONENT_NAME}: constructor():`);
  }


  /** Perform ngOnInit for this component.
  */
  ngOnInit() {
    this.logger.log(`${this.COMPONENT_NAME}: ngOnInit():`);
  }


  /** Handles submit button.
    *- Determine if answer is correct and emit result to parent.
    * - If not a true/false question and an incorrect answer was given...
    * - - Construct correctAnswerMessage message.
    * - Set answerSubmitted.
    * @param {string} value Value of submitted answer.
  */
  onSubmit(value: string) {
    this.logger.debug(`${this.COMPONENT_NAME}: onSubmit():`, value);

    // Determine if answer is correct and emit result to parent.
    this.answerSubmittedResult = (value === this.question?.answer.match);
    this.result.emit(this.answerSubmittedResult);

    // If not a true/false question and an incorrect answer was given..
    if ((this.question?.questionType !== QuestionType.TRUE_FALSE) &&
      // Construct correctAnswerMessage message
      !this.answerSubmittedResult) {
      this.correctAnswerMessage = 'The correct answer is ' + String(this.question?.answer.match);
    };

    // Set answerSubmitted
    this.answerSubmitted = true;
  }

}
