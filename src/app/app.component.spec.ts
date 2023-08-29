/* eslint-disable no-undef */
/*
  © Copyright 2023-2023 E Reynolds, Inc. All rights reserved.

  This program is confidential and proprietary to E Reynolds, and
    may not be copied, reproduced, modified, disclosed to others, published or used,
    in whole or in part, without express prior written permission.
*/

import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NGXLoggerMock } from './mock/NGXLogger.mock.service';
import { NGXLogger } from 'ngx-logger';
import { PageHeaderComponent } from './components/page/page-header/page-header.component';
import { PageFooterComponent } from './components/page/page-footer/page-footer.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent, PageHeaderComponent, PageFooterComponent],
    providers: [
      {
        provide: NGXLogger,
        useClass: NGXLoggerMock
      }
    ]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have as title \'angular-playground\'', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-playground');
  });

});
