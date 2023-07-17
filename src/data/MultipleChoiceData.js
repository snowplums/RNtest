import React from "react";

export const MultipleChoiceData = [
  {
    activityId: 0,
    description: "Vowels",
    questions: [
      {
        question: "How many vowels are present in this word: Fair",
        answer: "2",
        choices: ["0", "1", "2", "3"],
      },
      {
        question: "How many vowels are present in this word: Marry",
        answer: "2",
        choices: ["0", "1", "2", "3"],
      },
      {
        question: "Which of the following is false about vowels?",
        answer: "Most words do not need vowels",
        choices: ["Vowels have a very defined sound", "Most words do not need vowels", "There are short and long version sounds of vowels", "Sometimes there can be more than 5 vowels"],
      
      },{
        question: "Which of the following is sometimes a vowel?",
        answer: "Y",
        choices: ["A", "E", "I", "Y"],
      },
      {
        question: "Which of the following words contain 3 vowels?",
        answer: "Guide",
        choices: ["Guide", "Glide", "Glad", "Gladly"],
      }
    ],
  },
  {
    activityId: 1,
    description: "Nouns",
    questions: [
      {
        question: "Which of the following is not a noun?",
        answer: "Advised",
        choices: ["Trust", "Advice", "Truth", "Advised"],
      },
      {
        question: "How many nouns are in this sentence: He sought more help for his team's project?",
        answer: "4",
        choices: ["3", "4", "5", "2"],
      },
      {
        question: "Which of the following is a noun that starts with a vowel?",
        answer: "Appreciation",
        choices: ["Yarn", "Sound", "Appreciation", "Active"],
      },
      {
        question: "Which of the following nouns correctly use either 'a' or 'an'?",
        answer: "A fear",
        choices: ["An year", "A fear", "A owl", "An car"],
      },
      {
        question: "Which of the following is not a plural noun?",
        answer: "Goose",
        choices: ["Flowers", "Ducks", "Geese", "Goose"],
      },
    ],
  },
  {
    activityId: 2,
    description: "Letters of the alphabet",
    questions: [
      {
        question: "How many letters are in the alphabet?",
        answer: "26",
        choices: ["26", "22", "30", "18"],
      },
      {
        question: "What is the letter after O?",
        answer: "P",
        choices: ["M", "Q", "P", "S"],
      },
      {
        question: "Most commonly, how many vowels vs. consonants are in the alphabet?",
        answer: "Most commonly, 5 vowels and 21 consonants",
        choices: ["Most commonly, 3 vowels and 19 consonants", "Most commonly, 5 vowels and 21 consonants", "Most commonly, 4 vowels and 18 consonants ", "Most commonly, 7 vowels and 21 consonants"],
      },
      {
        question: "What is the 5th letter of the alphabet?",
        answer: "E",
        choices: ["E", "F", "G", "H"],
      },
      {
        question: "What is the 7th letter of the alphabet?",
        answer: "G",
        choices: ["G", "H", "I", "J"],
      },
    ],
  },
  {
    activityId: 3,
    description: "Verbs",
    questions: [
      {
        question: "Which of the following is a verb?",
        answer: "",
        choices: ["Information", "Wonder", "Though", "News"],
      },
      {
        question: "What is the past tense of 'go'?",
        answer: "went",
        choices: ["go", "went", "gone", "going"],
      },
      {
        question: "What is the past tense of 'eat'?",
        answer: "ate",
        choices: ["eat", "ate", "eaten", "eating"],
      },
      {
        question: "Which of the following sentences show an incorrectly conjugated verb",
        answer: "She walk to her classroom.",
        choices: ["She eats with her friends.", "They run the mile together. ", "She walk to her classroom.", "They play for the school soccer team."],
      },
      {
        question: "Which of the following is not a to-be verb?",
        answer: "be",
        choices: ["is", "be", "am", "are"],
      },
    ],
  },
];