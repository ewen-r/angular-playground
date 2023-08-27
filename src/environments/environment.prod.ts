/*
  © Copyright 2023-2023 E Reynolds, Inc. All rights reserved.

  This program is confidential and proprietary to E Reynolds, and
    may not be copied, reproduced, modified, disclosed to others, published or used,
    in whole or in part, without the express prior written permission.
*/

/** Production environment settings.
*/
export const environment = {
  version: 'production',
  production: true,
  loggerConfig: {
    // loggerConfig: See app.component.ts: ConfigureLoggerService()
    consoleEnabled: true,
    consoleLogLevel: 'debug', // trace < debug < info < log < warn < error < fatal
    serverLoggingUrl: '',
    serverLogLevel: 'trace' // trace < debug < info < log < warn < error < fatal
  }
};
