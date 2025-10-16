import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { PrismaAnswerAttachmentsRepository } from './prisma/repositories/prisma-answers-attachments-repository'
import { PrismaAnswerCommentsRepository } from './prisma/repositories/prisma-answers-comments-repository'
import { PrismaAnswersRepository } from './prisma/repositories/prisma-answers-repository'
import { PrismaQuestionsAttachmentsRepository } from './prisma/repositories/prisma-questions-attachments-repository'
import { PrismaQuestionsRepository } from './prisma/repositories/prisma-questions-repository'
import { PrismaQuestionsCommentsRepository } from './prisma/repositories/prisma-questions-comments-repository'
import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository'

@Module({
  providers: [
    PrismaService,
    {
      provide: QuestionsRepository,
      useClass: PrismaQuestionsRepository,
    },
    PrismaAnswerAttachmentsRepository,
    PrismaAnswerCommentsRepository,
    PrismaAnswersRepository,
    PrismaQuestionsAttachmentsRepository,
    PrismaQuestionsCommentsRepository,
  ],
  exports: [
    PrismaService,
    PrismaAnswerAttachmentsRepository,
    PrismaAnswerCommentsRepository,
    PrismaAnswersRepository,
    PrismaQuestionsAttachmentsRepository,
    QuestionsRepository,
    PrismaQuestionsCommentsRepository,
  ],
})
export class DatabaseModule {}
