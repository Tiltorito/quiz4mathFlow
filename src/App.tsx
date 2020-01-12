import React from 'react';
import logo from './logo.svg';
import './App.scss';
import FirstComponent from './components/FirstComponent/FirstComponent';
import NavigationBar from './components/NavigationBar/NavigationBar';
import ViewQuestions from './components/ViewQuestions/ViewQuestions';
import QuestionService from './services/QuestionService/QuestionService';
import DummyQuestionService from './services/QuestionService/DummyQuestionService';

export const QuestionServiceContext = React.createContext<QuestionService>(new DummyQuestionService)

const App: React.FC = () => {
  return (
    <React.Fragment>
      <NavigationBar />
      <div className="main-body">
        <ViewQuestions></ViewQuestions>
      </div>
    </React.Fragment>
  );
}

export default App;
