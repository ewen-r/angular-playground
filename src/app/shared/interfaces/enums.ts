/*
  © Copyright 2023-2023 E Reynolds, Inc. All rights reserved.

  This program is confidential and proprietary to E Reynolds, and
    may not be copied, reproduced, modified, disclosed to others, published or used,
    in whole or in part, without the express prior written permission.
*/

/* eslint-disable no-unused-vars */


/** Question/Quiz type. */
export enum QuestionType {
  TRUE_FALSE = 'True or False',
  MULTIPLE_CHOICE = 'Multiple Choice',
  IMAGE = 'Image',
  VIDEO = 'Video',
  AUDIO = 'Audio',
  TEXT = 'Text'
};


/** Media type (image, video, audio). */
export enum MediaType {
  IMAGE = 'Image',
  VIDEO = 'Video',
  AUDIO = 'Audio'
};


/** Difficulty of the quiz/question. */
export enum Difficulty {
  EASY = 'Easy',
  MEDIUM = 'Medium',
  DIFFICULT = 'Difficult',
  IMPOSSIBLE = 'Impossible'
};


