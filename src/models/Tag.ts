export default class Tag {
  constructor(public id: number, public name: string) {}

  static linkTo(tag: Tag) {
    return `tags/${tag.id}`
  }
}