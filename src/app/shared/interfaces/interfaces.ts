/*
  © Copyright 2023-2023 E Reynolds, Inc. All rights reserved.

  This program is confidential and proprietary to E Reynolds, and
    may not be copied, reproduced, modified, disclosed to others, published or used,
    in whole or in part, without the express prior written permission.
*/

import { Difficulty, MediaType, QuestionType } from './enums';


/** Origin information for an item. */
export interface OriginatorInfo {
  /** User uuid */
  userId?: string;
  /** Person who created the item. */
  username: string;
  /** Date the item was created. */
  createDate: string;
  /** Date the item was modified. */
  modifyDate: string;
};


/** Defines the interface for a media object. */
export interface Media {
  /** UUID of the item. */
  uuid: string;
  /** Type of the item. */
  type: MediaType;
  /** URI locator for this item. */
  uri: string;
  /** Origin information for this item. */
  originatorInfo: OriginatorInfo;
};


/** Defines the interface for a question's answer.
  * string - General text based answer (also if multiple-choice type).
  * boolean - If question is true/false type.
  * undefined - User needs to self-verify their answer. */
export interface Answer {
  /** The exact match required for the answer.
    * if undefined then the user can verify their own answer. */
  match: string | boolean | undefined;
  /** An optional statement supporting the answer. */
  statement: string;
}


/** Defines the interface for a question object. */
export interface Question {
  /** UUID of this question. */
  uuid: string;
  /** Origin information for this question. */
  originatorInfo: OriginatorInfo;
  /** Question topic. */
  topic: string;
  /** Type of question. */
  questionType: QuestionType;
  /** Difficulty of this question. */
  difficulty: Difficulty;
  /** Text body of this question. */
  statement: string;
  /** OPTIONAL: Any media file associated with this question. */
  media?: Media;
  /** The answer to this question. */
  answer: Answer;
  /** Any multiple choice options. */
  multiChoiceOptions?: string[];
};


/** Defines the interface for a High score. */
export interface HighScore {
  /** User uuid */
  userId?: string;
  /** User name */
  username: string;
  /** Score @TODO_EWEN is this a percentage or number of correct answers? */
  score: string;
  /** Date this score was achieved. */
  date: string;
}


/** Defines the interface for a quiz object. */
export interface Quiz {
  /** UUID of this quiz. */
  uuid: string;
  /** Quiz title. */
  title: string;
  /** Origin information for this quiz. */
  originatorInfo: OriginatorInfo;
  /** Tags for this quiz... e.g "sport", "history", "geography", "general knowledge" */
  tags: string[];
  /** Difficulty of the quiz. */
  difficulty: Difficulty;
  /** List of questions in this quiz. */
  questions: Question[];
  /** Types of question in this quiz. */
  questionTypes: QuestionType[];
  /** High score data for this quiz. */
  highScore?: HighScore
};

