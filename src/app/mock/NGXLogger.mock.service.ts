/*
  © Copyright 2023-2023 E Reynolds, Inc. All rights reserved.

  This program is confidential and proprietary to E Reynolds, and
    may not be copied, reproduced, modified, disclosed to others, published or used,
    in whole or in part, without express prior written permission.
*/

import { Injectable } from '@angular/core';
import { INGXLoggerConfig, NgxLoggerLevel } from 'ngx-logger';


/** Mock NGXLogger service. */
@Injectable({
  providedIn: 'root'
})
export class NGXLoggerMock {

  /** Dev use only
    * @ignore */
  log() {
    // Empty method.
  };


  /** Dev use only
    * @ignore */
  error() {
    // Empty method.
  };


  /** Dev use only
    * @ignore */
  getConfigSnapshot(): INGXLoggerConfig {
    const ret: INGXLoggerConfig = {
      level: NgxLoggerLevel.TRACE
    };

    return ret;
  };


  /** Dev use only
    * @ignore */
  updateConfig(config: INGXLoggerConfig) {
    // Empty method.
  }

};
