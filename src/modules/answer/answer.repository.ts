import { Injectable } from '@nestjs/common';
import { CreateAnswerDto } from './dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class AnswerRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateAnswerDto) {
    return this.prisma.answer.create({
      data,
    });
  }

  async findAll(quizId: string) {
    return this.prisma.answer.findMany({
      where: { quizId },
    });
  }

  async findOne(quizId: string, answerId: string) {
    return this.prisma.answer.findUniqueOrThrow({
      where: {
        id: answerId,
        quizId: quizId,
      },
    });
  }
}
