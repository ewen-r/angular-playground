/*
  © Copyright 2023-2023 E Reynolds, Inc. All rights reserved.

  This program is confidential and proprietary to E Reynolds, and
    may not be copied, reproduced, modified, disclosed to others, published or used,
    in whole or in part, without the express prior written permission.
*/

import { Component } from '@angular/core';
import { NGXLogger } from 'ngx-logger';


/** Component to display page footer. */
@Component({
  selector: 'app-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.scss']
})
export class PageFooterComponent {

  /** Name of this component. */
  readonly COMPONENT = 'PageFooterComponent';

  /** Current year (for copyright purposes). */
  currentYear = new Date().getFullYear();

  /** Class constructor.
    * @param {NGXLogger} logger Logger service (https://www.npmjs.com/package/ngx-logger).
  */
  constructor(private logger: NGXLogger) {
    console.log(`${this.COMPONENT}: constructor():`);
  }


}
