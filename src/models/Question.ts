import Tag from "./Tag";

export default class Question {
  constructor(public id: number, public title: string, public body: string, public tags: Tag[] = []) {}

  static linkTo(question: Question): string {
    return `questions/${question.id}`
  }
}