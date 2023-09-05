/*
  © Copyright 2023-2023 E Reynolds, Inc. All rights reserved.

  This program is confidential and proprietary to E Reynolds, and
    may not be copied, reproduced, modified, disclosed to others, published or used,
    in whole or in part, without express prior written permission.
*/

import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { Quiz } from '../../interfaces/interfaces';
import { Observable, retry } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


/** Service for managing Quizzes. */
@Injectable({
  providedIn: 'root'
})
export class QuizService {

  /** Name of this component. */
  readonly COMPONENT_NAME = 'QuizService';

  /** URL of quiz api server.  */
  private url = 'https://api-server-j2h3.onrender.com';
  // private url = 'http://localhost:4000';

  /** http options for request. */
  private readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  /** Class constructor.
    * @param {HttpClient} http Http client service used for making API requests.
    * @param {NGXLogger} logger Logger service (https://www.npmjs.com/package/ngx-logger).
  */
  constructor(
    public http: HttpClient,
    public logger: NGXLogger) {
    this.logger.log(`${this.COMPONENT_NAME}: constructor():`);
  }


  /** Get a specific instance of quiz by uuid.
    * @param {string} uuid ID of the quiz to retrieve.
    * @returns {Observable<Quiz>} Returns Quiz or null if error.
  */
  getQuizById(id: string): Observable<Quiz | null> {
    const url = `${this.url}/quiz/${id}`;
    this.logger.log(`${this.COMPONENT_NAME}: getQuizById():`, id, url);

    return this.http.get<Quiz | null>(url).pipe(
      retry(3)
    );
  }


}
