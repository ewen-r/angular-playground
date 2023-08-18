/*
  © Copyright 2023-2023 E Reynolds, Inc. All rights reserved.

  This program is confidential and proprietary to E Reynolds, and
    may not be copied, reproduced, modified, disclosed to others, published or used,
    in whole or in part, without the express prior written permission.
*/

import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { NGXLogger, NgxLoggerLevel } from 'ngx-logger';


/** Main app component. */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /** Name of this component. */
  readonly COMPONENT = 'AppComponent';

  /** App title. */
  title = 'angular-playground';

  /** Current year (for copyright purposes). */
  currentYear = new Date().getFullYear();


  /** Class constructor.
    * @param {NGXLogger} logger Logger service (https://www.npmjs.com/package/ngx-logger).
  */
  constructor(private logger: NGXLogger) {
    console.log(`${this.COMPONENT}: ${environment.version}: constructor():`, environment);
  }


  /** Perform ngOnInit for this component.
  */
  ngOnInit(): void {
    console.log(`${this.COMPONENT}: ngOnInit():`);
    this.ConfigureLoggerService();
    this.testLogging();
  }


  /** Configure logger service.
  */
  private ConfigureLoggerService() {
    console.log(`${this.COMPONENT}: ConfigureLoggerService():`, environment.loggerConfig);

    const updatedConfig = this.logger.getConfigSnapshot();

    // Use logger config from environment.
    updatedConfig.disableConsoleLogging = !environment.loggerConfig.consoleEnabled;
    updatedConfig.level = this.getLogLevel(environment.loggerConfig.consoleLogLevel);
    updatedConfig.serverLoggingUrl = environment.loggerConfig.serverLoggingUrl;
    updatedConfig.serverLogLevel = this.getLogLevel(environment.loggerConfig.serverLogLevel);

    // Update config.
    this.logger.updateConfig(updatedConfig);
  }


  /** Convert log level in env file to NgxLoggerLevel.
    * @param {string} level Log level according to env file.
    * @returns {NgxLoggerLevel} Return log level (defaults to NgxLoggerLevel.WARN)
  */
  private getLogLevel(level: string): NgxLoggerLevel {
    switch (level.toLowerCase()) {
      case 'trace':
        return NgxLoggerLevel.TRACE;
      case 'debug':
        return NgxLoggerLevel.DEBUG;
      case 'info':
        return NgxLoggerLevel.INFO;
      case 'log':
        return NgxLoggerLevel.LOG;
      case 'warn':
        return NgxLoggerLevel.WARN;
      case 'error':
        return NgxLoggerLevel.ERROR;
      case 'fatal':
        return NgxLoggerLevel.FATAL;

      default:
        return NgxLoggerLevel.WARN;
    }
  }


  /** Spew out some test logs at each defined log level.
  */
  private testLogging() {
    this.logger.fatal('testLogging(): this.logger.fatal is working. This is not a real error');
    this.logger.error('testLogging(): this.logger.error is working. This is not a real error');
    this.logger.warn('testLogging(): this.logger.warn is working. This is not a real warning');
    this.logger.log('testLogging(): this.logger.log is working.');
    this.logger.info('testLogging(): this.logger.info is working.');
    this.logger.debug('testLogging(): this.logger.debug is working.');
    this.logger.trace('testLogging(): this.logger.trace is working.');
  }

}
