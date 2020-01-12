import React from 'react';
import Question from '../../models/Question';
import DummyQuestionService from '../../services/QuestionService/DummyQuestionService';
import QuestionService from '../../services/QuestionService/QuestionService';
import QuestionList from '../QuestionList/QuestionList';
import LoadableComponent, { LoadableComponentState }  from '../LoadableComponent/LoadableComponent';

interface State {
  questions: Question[]
}

export default class ViewQuestions extends React.Component<{}, State> {
  
  private service: QuestionService

  constructor(props: {}) {
    super(props)
    this.service = new DummyQuestionService

    this.didSelectQuestion = this.didSelectQuestion.bind(this);

    this.state = {
      questions: []
    }
  }

  componentDidMount() {
    this.setState({
      questions: this.service.getAllQuestions()
    });
  }

  didSelectQuestion(question: Question): void {
    // navigate to question  
    console.log(question.id)
  }
  
  render() {
    return (
      <div className="section">
        <div className="container">
          <LoadableComponent state={LoadableComponentState.IDLE}>
            <QuestionList questions={this.state.questions} />
          </LoadableComponent>
        </div>
      </div>
    )
  }
}
