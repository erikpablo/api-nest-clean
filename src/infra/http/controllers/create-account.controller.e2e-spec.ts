import { AppModule } from '@/infra/app.module'
import { PrismaService } from '@/infra/prisma/prisma.service'
import type { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import request from 'supertest'

describe('Create account (e2e)', () => {
  let app: INestApplication
  let prisma: PrismaService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleRef.createNestApplication()

    prisma = moduleRef.get(PrismaService)

    await app.init()
  })

  test('[POST] /accounts', async () => {
    const response = await request(app.getHttpServer()).post('/accounts').send({
      name: 'Erik Pablo',
      email: 'nunespablo444@gmail.com',
      password: '1234567',
    })

    expect(response.statusCode).toBe(201)

    const userOnDataBase = await prisma.user.findUnique({
      where: {
        email: 'nunespablo444@gmail.com',
      },
    })

    expect(userOnDataBase).toBeTruthy()
  })
})
