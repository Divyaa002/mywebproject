function toggleForms() {
    let registerForm = document.getElementById('register-form');
    let loginForm = document.getElementById('login-form');
    if (registerForm.style.display === 'none') {
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
    } else {
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    }
}


// Quiz questions - Computer Languages (Java, Python, C)
const questions = [
    {
        question: "Which of these is not a Java keyword?",
        options: ["interface", "extends", "implements", "inherits"],
        answer: "inherits"
    },
    {
        question: "What is the correct extension for Python files?",
        options: [".java", ".py", ".python", ".pyt"],
        answer: ".py"
    },
    {
        question: "Which of these is used to allocate memory in C?",
        options: ["new", "malloc", "alloc", "create"],
        answer: "malloc"
    },
    {
        question: "In Python, what is used to create a block of code?",
        options: ["Curly braces {}", "Indentation", "Square brackets []", "Parentheses ()"],
        answer: "Indentation"
    },
    {
        question: "Which Java keyword is used to prevent method overriding?",
        options: ["static", "final", "private", "sealed"],
        answer: "final"
    },
    {
        question: "What does the '#' symbol represent in Python?",
        options: ["Comment", "Preprocessor directive", "String literal", "Special character"],
        answer: "Comment"
    },
    {
        question: "Which C header file is needed for input/output operations?",
        options: ["<math.h>", "<stdio.h>", "<stdlib.h>", "<io.h>"],
        answer: "<stdio.h>"
    },
    {
        question: "What is the parent class of all classes in Java?",
        options: ["Object", "Main", "Super", "Parent"],
        answer: "Object"
    },
    {
        question: "Which Python function is used to read input from the user?",
        options: ["get()", "read()", "input()", "scan()"],
        answer: "input()"
    },
    {
        question: "What is the size of 'int' data type in C (typically)?",
        options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
        answer: "4 bytes"
    },
    {
        question: "Which Java feature allows multiple methods with the same name?",
        options: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],
        answer: "Polymorphism"
    },
    {
        question: "In Python, what is the output of '3 * 'abc'?",
        options: ["abcabcabc", "9", "Error", "abcabc"],
        answer: "abcabcabc"
    },
    {
        question: "Which operator is used to access structure members in C?",
        options: [".", "->", "::", ":"],
        answer: "."
    },
    {
        question: "What is the default value of a boolean variable in Java?",
        options: ["true", "false", "null", "0"],
        answer: "false"
    },
    {
        question: "Which Python module is used for regular expressions?",
        options: ["regex", "re", "pyre", "pattern"],
        answer: "re"
    },
    {
        question: "What is the correct way to declare a pointer in C?",
        options: ["int ptr;", "int *ptr;", "&int ptr;", "*int ptr;"],
        answer: "int *ptr;"
    },
    {
        question: "Which Java collection implements a dynamic array?",
        options: ["HashSet", "TreeMap", "ArrayList", "LinkedList"],
        answer: "ArrayList"
    },
    {
        question: "What does the 'pass' statement do in Python?",
        options: ["Terminates the program", "Does nothing", "Skips current iteration", "Continues to next statement"],
        answer: "Does nothing"
    },
    {
        question: "Which C function converts a string to an integer?",
        options: ["atoi()", "itoa()", "stoi()", "parseInt()"],
        answer: "atoi()"
    },
    {
        question: "What is the entry point of a Java program?",
        options: ["main()", "start()", "init()", "run()"],
        answer: "main()"
    },
    {
        question: "Which Python data type is immutable?",
        options: ["List", "Dictionary", "Set", "Tuple"],
        answer: "Tuple"
    },
    {
        question: "What is the correct syntax for a for loop in C?",
        options: ["for (i = 0; i < n; i++)", "for i in range(n)", "for (i < n; i++)", "for i = 1 to n"],
        answer: "for (i = 0; i < n; i++)"
    },
    {
        question: "Which Java keyword is used to refer to the current object?",
        options: ["this", "self", "super", "object"],
        answer: "this"
    },
    {
        question: "What is the output of 'print(2 ** 3)' in Python?",
        options: ["6", "8", "9", "23"],
        answer: "8"
    },
    {
        question: "Which C keyword is used to define constants?",
        options: ["constant", "#define", "const", "final"],
        answer: "const"
    },
    {
        question: "What is the superclass of Exception in Java?",
        options: ["Error", "Throwable", "RuntimeException", "Object"],
        answer: "Throwable"
    },
    {
        question: "Which Python function returns the length of a list?",
        options: ["count()", "size()", "len()", "length()"],
        answer: "len()"
    },
    {
        question: "What is the correct way to include a header file in C?",
        options: ["#include <header.h>", "#include 'header.h'", "import header.h", "using header.h"],
        answer: "#include <header.h>"
    },
    {
        question: "Which Java modifier makes a member accessible within its package only?",
        options: ["public", "private", "protected", "default (no modifier)"],
        answer: "default (no modifier)"
    },
    {
        question: "What does the 'yield' keyword do in Python?",
        options: ["Returns from function", "Pauses function execution", "Raises an exception", "Terminates program"],
        answer: "Pauses function execution"
    },
    {
        question: "Which C function prints formatted output to stdout?",
        options: ["print()", "printf()", "println()", "write()"],
        answer: "printf()"
    },
    {
        question: "What is the default value of a local variable in Java?",
        options: ["0", "null", "undefined", "No default value"],
        answer: "No default value"
    },
    {
        question: "Which Python operator performs integer division?",
        options: ["/", "//", "%", "|"],
        answer: "//"
    },
    {
        question: "What is the correct way to declare a function in C?",
        options: ["function name() {}", "def name():", "void name() {}", "function name():"],
        answer: "void name() {}"
    },
    {
        question: "Which Java interface provides the compareTo() method?",
        options: ["Runnable", "Serializable", "Comparable", "Cloneable"],
        answer: "Comparable"
    },
    {
        question: "What does the 'lambda' keyword create in Python?",
        options: ["Class", "Function", "Module", "Anonymous function"],
        answer: "Anonymous function"
    },
    {
        question: "Which C data type is used to store a single character?",
        options: ["string", "char", "character", "chr"],
        answer: "char"
    },
    {
        question: "What is the purpose of 'finally' block in Java?",
        options: ["To handle exceptions", "To clean up resources", "To define final variables", "To mark end of program"],
        answer: "To clean up resources"
    },
    {
        question: "Which Python module is used for working with dates?",
        options: ["time", "calendar", "datetime", "date"],
        answer: "datetime"
    },
    {
        question: "What is the correct way to free memory in C?",
        options: ["delete", "free()", "remove()", "dealloc()"],
        answer: "free()"
    },
    {
        question: "Which Java keyword is used to prevent inheritance?",
        options: ["private", "final", "static", "sealed"],
        answer: "final"
    },
    {
        question: "What is the output of 'print(type(5.0))' in Python?",
        options: ["<class 'int'>", "<class 'float'>", "<class 'double'>", "<class 'number'>"],
        answer: "<class 'float'>"
    },
    {
        question: "Which C operator returns the memory address of a variable?",
        options: ["*", "&", "#", "@"],
        answer: "&"
    },
    {
        question: "What is the default access modifier for interface methods in Java?",
        options: ["private", "protected", "public", "package-private"],
        answer: "public"
    },
    {
        question: "Which Python function returns the absolute value?",
        options: ["abs()", "absolute()", "mod()", "pos()"],
        answer: "abs()"
    },
    {
        question: "What is the correct way to declare a string in C?",
        options: ["string s;", "String s;", "char s[];", "char *s;"],
        answer: "char *s;"
    },
    {
        question: "Which Java collection does not allow duplicate elements?",
        options: ["ArrayList", "LinkedList", "HashSet", "HashMap"],
        answer: "HashSet"
    },
    {
        question: "What does the 'self' parameter represent in Python?",
        options: ["Current class instance", "Parent class", "Module reference", "Static context"],
        answer: "Current class instance"
    },
    {
        question: "Which C function is used to compare two strings?",
        options: ["compare()", "strcmp()", "stringcmp()", "strcompare()"],
        answer: "strcmp()"
    },
    {
        question: "What is the purpose of 'volatile' keyword in Java?",
        options: ["To indicate a constant", "To prevent thread caching", "To make variable public", "To enable serialization"],
        answer: "To prevent thread caching"
    }
];

// Rest of the JavaScript code remains the same...

// DOM elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const restartBtn = document.getElementById('restart-btn');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const currentQnElement = document.getElementById('current-qn');
const timerElement = document.querySelector('.timer');
const scoreElement = document.getElementById('score');
const timeTakenElement = document.getElementById('time-taken');
const resultsElement = document.getElementById('results');

// Quiz variables
let currentQuestion = 0;
let userAnswers = Array(questions.length).fill(null);
let timer;
let timeLeft = 600; // 10 minutes in seconds
let quizStarted = false;
let quizEndTime;

// Start quiz
startBtn.addEventListener('click', startQuiz);

function startQuiz() {
    startScreen.style.display = 'none';
    quizScreen.style.display = 'block';
    quizStarted = true;
    quizEndTime = new Date().getTime() + timeLeft * 1000;
    
    // Start timer
    timer = setInterval(updateTimer, 1000);
    
    // Load first question
    loadQuestion(currentQuestion);
}

function loadQuestion(index) {
    if (index < 0 || index >= questions.length) return;
    
    currentQuestion = index;
    const question = questions[index];
    
    // Update question number
    currentQnElement.textContent = index + 1;
    
    // Set question text
    questionElement.textContent = question.question;
    
    // Clear previous options
    optionsElement.innerHTML = '';
    
    // Add options
    question.options.forEach((option, i) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        
        // Check if this option was previously selected
        if (userAnswers[index] === option) {
            optionElement.classList.add('selected');
        }
        
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectOption(option, index));
        optionsElement.appendChild(optionElement);
    });
    
    // Update navigation buttons
    prevBtn.disabled = index === 0;
    nextBtn.style.display = index === questions.length - 1 ? 'none' : 'inline-block';
    submitBtn.style.display = index === questions.length - 1 ? 'inline-block' : 'none';
}

function selectOption(option, questionIndex) {
    userAnswers[questionIndex] = option;
    
    // Update UI to show selected option
    const options = optionsElement.querySelectorAll('.option');
    options.forEach(opt => {
        opt.classList.remove('selected');
        if (opt.textContent === option) {
            opt.classList.add('selected');
        }
    });
}

// Navigation buttons
prevBtn.addEventListener('click', () => {
    if (currentQuestion > 0) {
        loadQuestion(currentQuestion - 1);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentQuestion < questions.length - 1) {
        loadQuestion(currentQuestion + 1);
    }
});

submitBtn.addEventListener('click', submitQuiz);

function submitQuiz() {
    clearInterval(timer);
    quizScreen.style.display = 'none';
    resultScreen.style.display = 'block';
    
    // Calculate score
    let score = 0;
    questions.forEach((question, index) => {
        if (userAnswers[index] === question.answer) {
            score++;
        }
    });
    
    // Display score
    scoreElement.textContent = score;
    
    // Calculate time taken
    const timeTaken = 600 - timeLeft;
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;
    timeTakenElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    // Display results
    resultsElement.innerHTML = '';
    questions.forEach((question, index) => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');
        
        if (userAnswers[index] === question.answer) {
            resultItem.classList.add('correct');
        } else {
            resultItem.classList.add('incorrect');
        }
        
        const resultQuestion = document.createElement('div');
        resultQuestion.classList.add('result-question');
        resultQuestion.textContent = `${index + 1}. ${question.question}`;
        
        const userAnswer = document.createElement('div');
        userAnswer.textContent = `Your answer: ${userAnswers[index] || 'Not answered'}`;
        
        const correctAnswer = document.createElement('div');
        correctAnswer.classList.add('result-answer');
        correctAnswer.textContent = `Correct answer: ${question.answer}`;
        
        resultItem.appendChild(resultQuestion);
        resultItem.appendChild(userAnswer);
        resultItem.appendChild(correctAnswer);
        resultsElement.appendChild(resultItem);
    });
}

// Timer function
function updateTimer() {
    const now = new Date().getTime();
    timeLeft = Math.max(0, Math.floor((quizEndTime - now) / 1000));
    
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    
    timerElement.textContent = `Time Left: ${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    if (timeLeft === 0) {
        clearInterval(timer);
        submitQuiz();
    }
}

// Restart quiz
restartBtn.addEventListener('click', () => {
    // Reset variables
    currentQuestion = 0;
    userAnswers = Array(questions.length).fill(null);
    timeLeft = 600;
    quizStarted = false;
    
    // Reset UI
    resultScreen.style.display = 'none';
    startScreen.style.display = 'block';
    timerElement.textContent = 'Time Left: 10:00';
});