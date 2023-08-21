/*
  © Copyright 2023-2023 E Reynolds, Inc. All rights reserved.

  This program is confidential and proprietary to E Reynolds, and
    may not be copied, reproduced, modified, disclosed to others, published or used,
    in whole or in part, without the express prior written permission.
*/


import { Component, Input, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { Question } from 'src/app/shared/interfaces/interfaces';


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

  @Input() question: Question | null = null;


  /** Class constructor.
    * @param {NGXLogger} logger Logger service (https://www.npmjs.com/package/ngx-logger).
  */
  constructor(private logger: NGXLogger) {
    console.log(`${this.COMPONENT_NAME}: constructor():`);
  }


  /** Perform ngOnInit for this component.
  */
  ngOnInit() {
    console.log(`${this.COMPONENT_NAME}: ngOnInit():`);
  }

}
