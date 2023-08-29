/* eslint-disable no-undef */
/*
  © Copyright 2023-2023 E Reynolds, Inc. All rights reserved.

  This program is confidential and proprietary to E Reynolds, and
    may not be copied, reproduced, modified, disclosed to others, published or used,
    in whole or in part, without express prior written permission.
*/

import { TestBed } from '@angular/core/testing';

import { QuizService } from '../quiz-service/quiz.service';
import { NGXLogger } from 'ngx-logger';
import { NGXLoggerMock } from 'src/app/mock/NGXLogger.mock.service';

describe('QuizService', () => {
  let service: QuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: NGXLogger,
        useClass: NGXLoggerMock
      }]
    });
    service = TestBed.inject(QuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
