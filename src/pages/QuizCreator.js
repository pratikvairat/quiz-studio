import React, { useState } from 'react';

const QuizCreator = () => {
  const [questions, setQuestions] = useState([
    { question: '', options: ['', '', '', ''] }
  ]);

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][field] = value;
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex] = value;
    setQuestions(updatedQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, { question: '', options: ['', '', '', ''] }]);
  };

  return (
    <div className='questions text-dark'>
      <h2>Quiz Creator</h2>
      <input className='form-control' placeholder="Enter Quiz title"></input>
      
      {questions.map((q, questionIndex) => (
        <div className='border border-primary rounded m-3 p-1 qes-plete'>
        <div key={questionIndex} style={{ marginBottom: '20px' }}>
          <h3>Question {questionIndex + 1}</h3>
          <input
            type="text"
            className='form-control'
            placeholder="Enter your question"
            value={q.question}
            onChange={(e) =>
              handleQuestionChange(questionIndex, 'question', e.target.value)
            }
          />
          <div>
            {q.options.map((option, optionIndex) => (
              <div key={optionIndex} className='p-2'>
                <input className='form-check-input' type="radio" name={questionIndex}></input>
                <input
                  type="text"
                  className='p-2 form-check-label form-control'
                  placeholder={`Option ${optionIndex + 1}`}
                  value={option}
                  onChange={(e) =>
                    handleOptionChange(questionIndex, optionIndex, e.target.value)
                  }
                />
              </div>
            ))}
          </div>
        </div>
        </div>
      ))}
      
      <div className='row'>
        <button className='col m-2 btn btn-primary' onClick={addQuestion}>Add Question</button>
        <button className='col m-2 btn btn-danger'>Submit Quiz</button>
      </div>
    </div>
  );
};

export default QuizCreator;
