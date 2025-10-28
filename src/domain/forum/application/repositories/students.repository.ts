import { Injectable } from '@nestjs/common'
import { Student } from '../../enterprise/entities/student'

@Injectable()
export abstract class StudentsRepository {
  abstract findByEmail(email: string): Promise<Student | null>
  abstract create(student: Student): Promise<void>
}
