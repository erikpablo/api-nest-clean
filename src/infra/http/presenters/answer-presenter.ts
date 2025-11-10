import type { Answer } from '@/domain/forum/enterprise/entities/answer'
import type { Question } from '@/domain/forum/enterprise/entities/question'

export class AnswerPresenter {
  static toHTTP(answer: Answer) {
    return {
      id: answer.id.toString(),
      content: answer.content,
      createdAt: answer.createdAt,
      updatedAt: answer.updatedAt,
    }
  }
}
