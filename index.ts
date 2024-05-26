#! /usr/bin/env node
import inquirer from "inquirer";
interface Question {
    question: string;
    choices: string[];
    answerIndex: number;
} 
const quiz: Question[] = [
    { 
    question: 'What is the capital of France?',
    choices: ['Paris', 'London', 'Berlin', 'Madrid'],
    answerIndex: 0,
    },
    {
    question: 'Who wrote "Romeo and Juliet"?',
    choices: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Leo Tolstoy'],
    answerIndex: 0
    },
    {
    question: 'What is the chemical symbol for water?',
    choices: ['H2O', 'CO2', 'O2', 'H2SO4'],
    answerIndex: 0,
    },
    
    {
        question: "What is the capital of Sindh?",
        choices: ["Karachi", "Lahore", "Islamabad", "Quetta"],
        answerIndex: 0
    },
    {
        question: "Who is the writer of National Dua?",
        choices: ["Alama Iqbal", "Quaid e Azam", "Liaqat Ali Khan", "mirza Galib"],
        answerIndex: 0
    }
    ];
    async function runQuiz() {
        let score = 0;
        for (const question of quiz) {
            const answer = await inquirer.prompt({
                type: "list",
                name: "selected",
                choices: question.choices,
                message: question.question
            })
            if(answer.selected === question.choices[question.answerIndex]) {
                console.log("Correct!!!")
                score++;
            } else {
                console.log("wrong")
            }
            
        }
        console.log(`Welcome to quiz, the score is ${score}/${quiz.length}`)
    }
    console.log("Welcome to the quiz")
    runQuiz();