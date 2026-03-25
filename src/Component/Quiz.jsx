import React from 'react'
import './Quiz.css'
import QuestionsList from './QuestionsList'

function Quiz() {
  const questions=[
    {
        question:"What is npm?",
        options:["Node Package Manager","New Programming Method","Next Programming Module","None of the above"],
        answer:"Node Package Manager"
    },
    {
        question:"Output of \"2\"+2 in JavaScript?",
        options:["4","22","undefined","TypeError"],
        answer:"22"
    },
    {
        question:"Full form of HTML?",
        options:["Hypertext Markup Language","Hyperlink and Text Markup Language","Highly Technical Markup Language","None of the above"],
        answer:"Hypertext Markup Language"
    },
    {
        question:"cmd for creating create-react-app?",
        options:["npm create vite@latest app-name ","New Programming Method","Next Programming Module","None of the above"],
        answer:"npm create vite@latest app-name "
    },
    {
        question:"Who is the father of the C programming language?",
        options:["Steve Jobs","Dennis Ritchie","New Programming Method","Next Programming Module"],
        answer:"Dennis Ritchie"
    },
    {
        question:"What is programming?",
        options:["The process of creating computer programs","New Programming Method","Next Programming Module","None of the above"],
        answer:"The process of creating computer programs"
    },
  ]

  const colors = [
    '255,0,0',    // red
    '0,255,0',    // green
    '0,0,255',    // blue
    '255,255,0',  // yellow
    '255,0,255',  // magenta
    '0,255,255'   // cyan
  ];

  const colorGradients = [
    'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)', // red
    'linear-gradient(135deg, #51cf66 0%, #40c057 100%)', // green
    'linear-gradient(135deg, #74c0fc 0%, #339af0 100%)', // blue
    'linear-gradient(135deg, #ffd43b 0%, #fab005 100%)', // yellow
    'linear-gradient(135deg, #da77f2 0%, #9775fa 100%)', // magenta
    'linear-gradient(135deg, #20c997 0%, #12b886 100%)'  // cyan
  ];

  const [currentquestionIndex, setCurrentquestionIndex] = React.useState(0);
  const [selectedAnswer, setSelectedAnswer] = React.useState(null);
  const [score, setScore] = React.useState(0);
  const [showResult, setShowResult] = React.useState(false);

  const currentQuestion = questions[currentquestionIndex];

  React.useEffect(() => {
    if (!showResult) {
      document.body.style.background = colorGradients[currentquestionIndex % colorGradients.length];
    } else {
      document.body.style.background = 'linear-gradient(135deg, #93C572 0%, #4A7C59 100%)'; // pistachio for result
    }
  }, [currentquestionIndex, showResult]);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    if (selectedAnswer === currentQuestion.answer) {
      setScore(score + 1);
    }
    setSelectedAnswer(null);
    if (currentquestionIndex < questions.length - 1) {
      setCurrentquestionIndex(currentquestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const currentColor = colors[currentquestionIndex % colors.length];

  if (showResult) {
    return (
      <div className="quiz-container" style={{ '--bg-color': '255,255,255' }}>
        <h1>Quiz Complete!</h1>
        <p>Your score: {score}/{questions.length}</p>
      </div>
    );
  }

  return (
    <div className="quiz-container" style={{ '--bg-color': currentColor }}>
      <QuestionsList
        question={currentQuestion.question}
        options={currentQuestion.options}
        onSelect={handleAnswerSelect}
        selectedAnswer={selectedAnswer}
      />
      <button onClick={handleNext} disabled={!selectedAnswer}>Next</button>
    </div>
  );
}

export default Quiz
