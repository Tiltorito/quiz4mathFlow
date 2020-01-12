import Question from '../../models/Question';

export default interface QuestionService {
  getAllQuestions(): Question[]
}