//Welcome to CLI travel quiz
var readlineSync = require('readline-sync');
const chalk = require('chalk');
var score = 0;
var levelScore = 0;
var questionbankLevelOne = [
  {
    id: 1,
    question:
      'Which Indian hill station in India is known as the “Queen of the Hills”?',
    answer: 'Mussoorie',
  },
  {
    id: 2,
    question:
      'Which Indian state is famous for boating activities on its backwaters?',
    answer: 'Kerela',
  },
  {
    id: 3,
    question: 'Which city is known as the ‘Electronic City of India’?',
    answer: 'Bangalore',
  },
  {
    id: 4,
    question: 'Which city in South India is also known as the City of Palaces?',
    answer: 'Mysore',
  },
  {
    id: 5,
    question: 'Which of the below state is famous for weaving carpets?',
    answer: 'Kashmir',
  },
];
var questionbankLevelTwo = [
  {
    id: 1,
    question:
      'How many Infinity Stones are there?',
    answer: 'Six',
  },
  {
    id: 2,
    question:
      'Who was able to pick up Thor’s hammer in Endgame?',
    answer: 'Captain America',
  },
  {
    id: 3,
    question: 'Which movie kicked off the Marvel Cinematic Universe?',
    answer: 'Iron Man',
  },
  {
    id: 4,
    question: 'Who rescued Tony Stark and Nebula from space?',
    answer: 'Captain Marvel',
  },
  {
    id: 5,
    question: 'Hawkeye has how many children?',
    answer: 'Three',
  },
];
var questionbankLevelThree = [
  {
    id: 1,
    question:
      'What is the largest of the seven continents?',
    answer: 'Asia',
  },
  {
    id: 2,
    question:
      'Which of these islands is a part of the Australian continent?',
    answer: 'Tasmania',
  },
  {
    id: 3,
    question: ' What is the world"s most populous country?',
    answer: 'China',
  },
  {
    id: 4,
    question: 'What country is the world"s top travel destination?',
    answer: 'France',
  },
  {
    id: 5,
    question: 'What country has won the most Winter Olympic Medals?',
    answer: 'Norway',
  },
];

function welcomeMsg() {
  var userName = readlineSync.question(
    chalk.bgYellow('Enter you First Name & Last Name: '),
  );
  //regex
  var letterNumber = /^([a-zA-Z]{1,}\s{0,1}[a-zA-Z]{1,})$/;

  while (letterNumber.test(userName) === false) {
    userName = readlineSync.question(
      chalk.redBright('Please Enter correct Name? '),
    );
  }
  console.log(
    chalk.blue('\n', '------', 'Hi', chalk.italic.red(userName.toUpperCase()), 'Welocome to Quiz------', '\n',),
  );
  console.log(chalk.yellow('Get Ready For Level 1 \n'));
  console.log(chalk.yellow("--------------------------------"));
  console.log(chalk.greenBright("You will need 3/5 correct to pass level 1"));
  console.log(chalk.yellow("--------------------------------"));
}

function levels(arr) {
  levelScore = 0;
  for (var i = 0; i < arr.length; i++) {
    var currentQues = arr[i];
    quizLevel(currentQues.id, currentQues.question, currentQues.answer);
  }
  levelScoreCheck(score);
}

function quizLevel(id, question, answer) {
  userAnswer = readlineSync.question(
    chalk.blue(id, ':', question, '\n', 'Answer:'),
  );
  
  if (userAnswer.toLowerCase() == answer.toLowerCase()) {
    console.log(chalk.green('Correct Answer'));
    console.log('\n');
    score++;
    levelScore++;
  } else {
    console.log(chalk.red('Incorrect Answer'));
    console.log('\n');
  }
}

function levelScoreCheck(scorecheck) {
  if (scorecheck >= 3 && scorecheck <= 5 && levelScore >= 3) {
    // scoreL1 = scorecheck;
    console.log(
      chalk.yellow('Yipee You passed level 1.\n Your Score is :',
      scorecheck,
      '\n',)
    );
    console.log('Get ready for Level 2 \n');
    console.log(chalk.yellow("--------------------------------"));
    console.log(chalk.greenBright("You will need 4/5 correct to pass level 1"));
    console.log(chalk.yellow("--------------------------------"));
    levels(questionbankLevelTwo);
  } else if (scorecheck >= 7 && scorecheck <= 10 && levelScore >= 4) {
    console.log(
      chalk.yellow('Yipee You passed level 2.\n Your Score is :',
        scorecheck,
        '\n')
    );
    console.log('Get ready for Level 3 \n');
    console.log(chalk.yellow("--------------------------------"));
    console.log(chalk.greenBright("You will need 5/5 correct to pass level 1"));
    console.log(chalk.yellow("--------------------------------"));
    levels(questionbankLevelThree);
  } else if (scorecheck >= 12 && scorecheck <= 15 && levelScore >= 5) {
    console.log(
      chalk.yellow('Yipee You passed level 3.\n Your Score is :',
      scorecheck,
      '\n',)
    );
  } else {
    console.log(chalk.redBright('Ooopsiee!! You did not clear the level'));
  }
}

welcomeMsg();
levels(questionbankLevelOne);
