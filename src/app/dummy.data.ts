/* eslint-disable no-useless-escape */
/*
  © Copyright 2023-2023 E Reynolds, Inc. All rights reserved.

  This program is confidential and proprietary to E Reynolds, and
    may not be copied, reproduced, modified, disclosed to others, published or used,
    in whole or in part, without express prior written permission.
*/

import { Difficulty, QuestionType } from './shared/interfaces/enums';
import { Quiz, Question, OriginatorInfo } from './shared/interfaces/interfaces';

/* spellchecker: disable */

/** Dev use only
  * @ignore */
const originator1: OriginatorInfo = {
  username: 'Ewen Reynolds',
  createDate: '22-Aug-2023',
  modifyDate: ''
};

/** Dev use only
  * @ignore */
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
    match: 'true',
    statement: 'He is one of England\'s most successful golfers.'
  }
};

/** Dev use only
  * @ignore */
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
    match: 'false',
    statement: 'Of course it isn\'t... everyone knows it\'s purple with YELLOW spots 😆'
  }
};

/** Dev use only
  * @ignore */
const questionTF03: Question = {
  uuid: 'questionTF03',
  originatorInfo: originator1,
  topic: 'general knowledge',
  questionType: QuestionType.TRUE_FALSE,
  difficulty: Difficulty.EASY,
  statement: 'True or false.. I am amazing?',
  multiChoiceOptions: [
    'true', 'false'
  ],
  answer: {
    match: 'true',
    statement: '.. and also extremely modest.'
  }
};

/** Dev use only
  * @ignore */
const questionTF04: Question = {
  uuid: 'questionTF04',
  originatorInfo: originator1,
  topic: 'Movies',
  questionType: QuestionType.TRUE_FALSE,
  difficulty: Difficulty.EASY,
  statement: 'True or false.. Mrs. Robinson in The Graduate was played by Anne Bancroft?',
  multiChoiceOptions: [
    'true', 'false'
  ],
  answer: {
    match: 'true',
    statement: ''
  }
};

/** Dev use only
  * @ignore */
const questionTF05: Question = {
  uuid: 'questionTF05',
  originatorInfo: originator1,
  topic: 'Movies',
  questionType: QuestionType.TRUE_FALSE,
  difficulty: Difficulty.EASY,
  statement: 'True or false.. The name of the skyscraper in Die Hard is \"The Nakatomi Towers\"',
  multiChoiceOptions: [
    'true', 'false'
  ],
  answer: {
    match: 'false',
    statement: 'It was \"Nakatomi Plaza\"'
  }
};

/** Dev use only
  * @ignore */
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
    statement: 'It was discovered in 1825.'
  }
};

/** Dev use only
  * @ignore */
const questionMultipleChoice02: Question = {
  uuid: 'questionMultipleChoice02',
  originatorInfo: originator1,
  topic: 'Science',
  questionType: QuestionType.MULTIPLE_CHOICE,
  difficulty: Difficulty.DIFFICULT,
  statement: 'Which year was the first Tonka truck made?',
  multiChoiceOptions: [
    '1945', '1947', '1949'
  ],
  answer: {
    match: '1947',
    statement: ''
  }
};

/** Dev use only
  * @ignore */
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

/** Dev use only
  * @ignore */
const questionMultipleChoice04: Question = {
  uuid: 'questionMultipleChoice04',
  originatorInfo: originator1,
  topic: 'history',
  questionType: QuestionType.MULTIPLE_CHOICE,
  difficulty: Difficulty.EASY,
  statement: 'Who was British Prime Minister during the Falklands war?',
  answer: {
    match: 'Margaret Thatcher',
    statement: ''
  },
  multiChoiceOptions: [
    'Tony Blair', 'Margaret Thatcher', 'Gordon Brown'
  ]
};

/** Dev use only
  * @ignore */
const questionMultipleChoice05: Question = {
  uuid: 'questionMultipleChoice05',
  originatorInfo: originator1,
  topic: 'Movies',
  questionType: QuestionType.MULTIPLE_CHOICE,
  difficulty: Difficulty.EASY,
  statement: 'Which 1982 film was greatly accepted for its portrayal of the love between a young, fatherless suburban boy and a lost, benevolent and homesick visitor from another planet?',
  answer: {
    match: 'E. T. The Extra-Terrestrial',
    statement: ''
  },
  multiChoiceOptions: [
    'E. T. The Extra-Terrestrial', 'Rocky', 'The Wizard of Oz', 'Predator'
  ]
};

/** Dev use only
  * @ignore */
const questionMultipleChoice06: Question = {
  uuid: 'questionMultipleChoice06',
  originatorInfo: originator1,
  topic: 'Movies',
  questionType: QuestionType.MULTIPLE_CHOICE,
  difficulty: Difficulty.EASY,
  statement: 'In The Matrix, does Neo take the blue pill or the red pill?',
  answer: {
    match: 'Red',
    statement: '\"You take the blue pill – the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill – you stay in Wonderland, and I show you how deep the rabbit hole goes.\"'
  },
  multiChoiceOptions: [
    'Red', 'Blue'
  ]
};

/** Dev use only
  * @ignore */
const questionMultipleChoice07: Question = {
  uuid: 'questionMultipleChoice07',
  originatorInfo: originator1,
  topic: 'Movies',
  questionType: QuestionType.MULTIPLE_CHOICE,
  difficulty: Difficulty.EASY,
  statement: 'Who played Juror Number 8 in 12 Angry Men?',
  answer: {
    match: 'Henry Fonda',
    statement: ''
  },
  multiChoiceOptions: [
    'Dustin Hoffman', 'Henry Fonda', 'Robert Redford', 'David Soul'
  ]
};

/** Dev use only
  * @ignore */
const dummyQuiz1: Quiz = {
  uuid: '0001',
  title: 'General Knowledge Quiz',
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
    questionMultipleChoice04,
    questionMultipleChoice05
  ],
  questionTypes: [QuestionType.TRUE_FALSE, QuestionType.MULTIPLE_CHOICE]
};

/** Dev use only
  * @ignore */
const dummyQuiz2: Quiz = {
  uuid: '0002',
  title: 'Movie Time Quiz',
  originatorInfo: originator1,
  tags: ['Movies'],
  difficulty: Difficulty.MEDIUM,
  questions: [
    questionTF04,
    questionTF05,
    questionMultipleChoice05,
    questionMultipleChoice06,
    questionMultipleChoice07
  ],
  questionTypes: [QuestionType.TRUE_FALSE, QuestionType.MULTIPLE_CHOICE]
};


/** Dev use only. Dummy quiz data.
  * @ignore */
export const dummyQuizzes: Quiz[] = [
  dummyQuiz1,
  dummyQuiz2
];

