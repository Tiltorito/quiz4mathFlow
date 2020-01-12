import QuestionService from "./QuestionService";
import Question from "../../models/Question";
import Tag from "../../models/Tag";

export default class DummyQuestionService implements QuestionService {
  getAllQuestions(): Question[] {
    return this.questions();
  }

  private questions(): Question[] {
    return [
      new Question(1, 'Δεν καταλαβαίνω διαφορικές', 'Δεν ξέρω μαθηματικά help', this.dummyTags1()),
      new Question(2, 'Φυσική πραγματα', 'Μόνο για φυσικούς', this.dummyTags2())
    ]
  }

  private dummyTags1(): Tag[] {
    return [
      new Tag(1, 'Μαθηματικά'),
      new Tag(2, 'Κεφάλαιο 2'),
      new Tag(3, 'Ολοκληρώματα')
    ]
  }

  private dummyTags2(): Tag[] {
    return [
      new Tag(1, 'Φυσική'),
      new Tag(2, 'Φυσικά πράγματα'),
    ]
  }
}