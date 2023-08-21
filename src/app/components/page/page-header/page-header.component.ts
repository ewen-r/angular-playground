/*
  © Copyright 2023-2023 E Reynolds, Inc. All rights reserved.

  This program is confidential and proprietary to E Reynolds, and
    may not be copied, reproduced, modified, disclosed to others, published or used,
    in whole or in part, without the express prior written permission.
*/

import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';


/** Component to display page header. */
@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  /** Name of this component. */
  readonly COMPONENT_NAME = 'PageHeaderComponent';

  /** App title. */
  title = 'angular-playground';


  /** Class constructor.
    * @param {NGXLogger} logger Logger service (https://www.npmjs.com/package/ngx-logger).
  */
  constructor(private logger: NGXLogger) {
    this.logger.log(`${this.COMPONENT_NAME}: constructor():`);
  }


  /** Perform ngOnInit for this component.
  */
  ngOnInit(): void {
    this.logger.log(`${this.COMPONENT_NAME}: ngOnInit():`);
  }
}
