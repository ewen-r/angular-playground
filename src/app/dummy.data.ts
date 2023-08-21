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
  createDate: '1-1-2023',
  modifyDate: ''
};

const question1: Question = {
  uuid: 'question-001',
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

const question2: Question = {
  uuid: 'question-002',
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

const question3: Question = {
  uuid: 'question-003',
  originatorInfo: originator1,
  topic: 'Movies',
  questionType: QuestionType.TEXT,
  difficulty: Difficulty.EASY,
  statement: 'Which 1982 film was greatly accepted by film fans for its portrayal of the love between a young, fatherless suburban boy and a lost, benevolent and homesick visitor from another planet?',
  answer: {
    match: 'E.T The Extra-Terrestrial',
    statement: ''
  }
};

const question4: Question = {
  uuid: 'question-004',
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

const question5: Question = {
  uuid: 'question-005',
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

export const dummyQuiz: Quiz = {
  uuid: 'quiz-1234',
  title: 'DummyQuiz1234',
  originatorInfo: originator1,
  tags: ['general knowledge', 'sport', 'history'],
  difficulty: Difficulty.MEDIUM,
  questions: [
    question1,
    question2,
    question3,
    question4,
    question5
  ],
  questionTypes: [QuestionType.TEXT]
};
