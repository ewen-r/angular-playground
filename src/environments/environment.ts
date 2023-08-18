/*
  © Copyright 2023-2023 E Reynolds, Inc. All rights reserved.

  This program is confidential and proprietary to E Reynolds, and
    may not be copied, reproduced, modified, disclosed to others, published or used,
    in whole or in part, without the express prior written permission.
*/

/* This file can be replaced during build by using the `fileReplacements` array.
 * `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
 * The list of file replacements can be found in `angular.json`. */

export const environment = {
  version: 'development',
  production: false,
  loggerConfig: {
    // loggerConfig: See app.component.ts: ConfigureLoggerService()
    consoleEnabled: true,
    consoleLogLevel: 'debug', // trace < debug < info < log < warn < error < fatal
    serverLoggingUrl: '',
    serverLogLevel: 'trace' // trace < debug < info < log < warn < error < fatal
  }
};
