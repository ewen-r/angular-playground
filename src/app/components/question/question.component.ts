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

  /** Unique prefix for ID and name of HTML Elements in this component.
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

  /** If true.. shows answerDiv */
  showAnswer: boolean = false;

  /** User's answer to this question. */
  userAnswer: boolean | null = null;

  /** Displayed answer to this question. */
  displayAnswer: string = '';

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

    if (this.question) {
      this.displayAnswer = `${this.question.answer.match}  `;
      if (this.question.answer.statement) {
        this.displayAnswer += `(${this.question.answer.statement})`;
      }
    }
  }


  /** Handle onAnswerButton button. */
  onAnswerButton() {
    this.userAnswer = !this.userAnswer;
    this.logger.debug(`${this.COMPONENT_NAME}: onAnswerButton():`, this.userAnswer);
    this.result.emit(this.userAnswer);
  }


}
