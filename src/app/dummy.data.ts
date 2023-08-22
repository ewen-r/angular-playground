/*
  © Copyright 2023-2023 E Reynolds, Inc. All rights reserved.

  This program is confidential and proprietary to E Reynolds, and
    may not be copied, reproduced, modified, disclosed to others, published or used,
    in whole or in part, without the express prior written permission.
*/

import { Difficulty, QuestionType } from './shared/interfaces/enums';
import { Quiz, Question, OriginatorInfo } from './shared/interfaces/interfaces';

/* spellchecker: disable */

const originator1: OriginatorInfo = {
  username: 'Ewen Reynolds',
  createDate: '22-Aug-2023',
  modifyDate: ''
};

const questionTF01: Question = {
  uuid: 'questionTF01',
  originatorInfo: originator1,
  topic: 'sport',
  questionType: QuestionType.TRUE_FALSE,
  difficulty: Difficulty.EASY,
  statement: 'True or false.. Nick Faldo is a famous golfer?',
  multiChoiceOptions: [
    'true', 'false'
  ],
  answer: {
    match: true,
    statement: 'He is one of England\'s most successful golfers.'
  }
};

const questionTF02: Question = {
  uuid: 'questionTF02',
  originatorInfo: originator1,
  topic: 'general knowledge',
  questionType: QuestionType.TRUE_FALSE,
  difficulty: Difficulty.EASY,
  statement: 'True or false.. The sky is purple with green spots?',
  multiChoiceOptions: [
    'true', 'false'
  ],
  answer: {
    match: false,
    statement: 'Of course it isn\'t.'
  }
};

const questionTF03: Question = {
  uuid: 'questionTF02',
  originatorInfo: originator1,
  topic: 'general knowledge',
  questionType: QuestionType.TRUE_FALSE,
  difficulty: Difficulty.EASY,
  statement: 'True or false.. I am amazing?',
  multiChoiceOptions: [
    'true', 'false'
  ],
  answer: {
    match: true,
    statement: '.. and also extremely modest.'
  }
};


const questionMultipleChoice01: Question = {
  uuid: 'questionMultipleChoice01',
  originatorInfo: originator1,
  topic: 'Science',
  questionType: QuestionType.MULTIPLE_CHOICE,
  difficulty: Difficulty.DIFFICULT,
  statement: 'Which metal was discovered by Hans Christian Oersted?',
  multiChoiceOptions: [
    'Iron', 'Magnesium', 'Zinc', 'Aluminium'
  ],
  answer: {
    match: 'Aluminium',
    statement: 'It was discovered in 1825'
  }
};

const questionMultipleChoice02: Question = {
  uuid: 'questionMultipleChoice02',
  originatorInfo: originator1,
  topic: 'Science',
  questionType: QuestionType.MULTIPLE_CHOICE,
  difficulty: Difficulty.MEDIUM,
  statement: 'Which year was the first Tonka truck made?',
  multiChoiceOptions: [
    '1945', '1947', '1949'
  ],
  answer: {
    match: '1947',
    statement: ''
  }
};


const questionMultipleChoice03: Question = {
  uuid: 'questionMultipleChoice03',
  originatorInfo: originator1,
  topic: 'History',
  questionType: QuestionType.MULTIPLE_CHOICE,
  difficulty: Difficulty.MEDIUM,
  statement: 'Which year marked the beginning of the Frech revolution?',
  multiChoiceOptions: [
    '1689', '1789', '1889'
  ],
  answer: {
    match: '1789',
    statement: ''
  }
};


const questionText01: Question = {
  uuid: 'questionText01',
  originatorInfo: originator1,
  topic: 'history',
  questionType: QuestionType.TEXT,
  difficulty: Difficulty.MEDIUM,
  statement: 'Who was British Prime Minister during the Falklands war?',
  answer: {
    match: 'Margaret Thatcher',
    statement: ''
  }
};

const questionText02: Question = {
  uuid: 'questionText02',
  originatorInfo: originator1,
  topic: 'Movies',
  questionType: QuestionType.TEXT,
  difficulty: Difficulty.EASY,
  statement: 'Which 1982 film was greatly accepted for its portrayal of the love between a young, fatherless suburban boy and a lost, benevolent and homesick visitor from another planet?',
  answer: {
    match: 'E.T The Extra-Terrestrial',
    statement: ''
  }
};


export const dummyQuiz: Quiz = {
  uuid: 'quiz-1234',
  title: 'Dummy Quiz 1234',
  originatorInfo: originator1,
  tags: ['general knowledge', 'sport', 'history'],
  difficulty: Difficulty.MEDIUM,
  questions: [
    questionTF01,
    questionTF02,
    questionTF03,
    questionMultipleChoice01,
    questionMultipleChoice02,
    questionMultipleChoice03,
    questionText01,
    questionText02
  ],
  questionTypes: [QuestionType.TEXT]
};

