/* eslint-disable no-undef */
/*
  © Copyright 2023-2023 E Reynolds, Inc. All rights reserved.

  This program is confidential and proprietary to E Reynolds, and
    may not be copied, reproduced, modified, disclosed to others, published or used,
    in whole or in part, without express prior written permission.
*/


import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageErrorComponent } from './page-error.component';
import { NGXLogger } from 'ngx-logger';
import { NGXLoggerMock } from 'src/app/mock/NGXLogger.mock.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('PageErrorComponent', () => {
  let component: PageErrorComponent;
  let fixture: ComponentFixture<PageErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [PageErrorComponent],
      providers: [
        {
          provide: NGXLogger,
          useClass: NGXLoggerMock
        }
      ]
    });
    fixture = TestBed.createComponent(PageErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
