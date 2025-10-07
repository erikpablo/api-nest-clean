import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ZodValidationPipe } from 'src/pipe/zod-validation-pipe'
import { PrismaService } from 'src/prisma/prisma.service'
import z from 'zod'

@Controller('/questions')
@UseGuards(AuthGuard('jwt'))
export class CreateQuestionController {
  constructor(private prisma: PrismaService) {}

  @Post()
  async handle() {
    return { message: 'Hello World' }
  }
}
