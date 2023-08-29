/*
  © Copyright 2023-2023 E Reynolds, Inc. All rights reserved.

  This program is confidential and proprietary to E Reynolds, and
    may not be copied, reproduced, modified, disclosed to others, published or used,
    in whole or in part, without express prior written permission.
*/

import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


/** Component to display an error page with a custom error and a "go back" link. */
@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-error.component.html',
  styleUrls: ['./page-error.component.scss']
})
export class PageErrorComponent implements OnInit {

  /** Name of this component. */
  readonly COMPONENT_NAME = 'PageErrorComponent';

  /** Page title. */
  readonly pageTitle: string = 'Oops!';

  /** Page sub-title. */
  pageSubtitle: string = 'Page not found.';


  /** Class constructor.
    * @param {NGXLogger} logger Logger service (https://www.npmjs.com/package/ngx-logger).
    * @param {ActivatedRoute} route Route service used to parse page route.
    * @param {Location} location Location service for handling back button action.
  */
  constructor(
    private logger: NGXLogger,
    private route: ActivatedRoute,
    private location: Location) {

    // Does nothing.
  }


  /** Perform ngOnInit for this component.
    * - Output the offending route to debug.
  */
  ngOnInit() {
    // eslint-disable-next-line dot-notation
    this.pageSubtitle = this.route.snapshot.data['message'] ?? 'Unknown error';
    this.logger.log(`${this.COMPONENT_NAME}: ngOnInit():`, this.route.snapshot);
  }


  /** Handle navigate back action.
    * - Navigate to previous page.
  */
  onBack() {
    this.location.back();
  }

}
