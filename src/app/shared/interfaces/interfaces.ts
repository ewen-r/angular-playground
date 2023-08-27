/*
  © Copyright 2023-2023 E Reynolds, Inc. All rights reserved.

  This program is confidential and proprietary to E Reynolds, and
    may not be copied, reproduced, modified, disclosed to others, published or used,
    in whole or in part, without express prior written permission.
*/

import { Difficulty, QuestionType } from './enums';


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


/** Defines the interface for a question's answer. */
export interface Answer {
  /** The exact match required for the answer. */
  match: string;
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
  /** The answer to this question. */
  answer: Answer;
  /** Any multiple choice options. */
  multiChoiceOptions?: string[];
};


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
};

