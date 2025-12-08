import { Injectable } from '@nestjs/common';
import { CreateAnswerDto } from './dto';
import { AnswerRepository } from './answer.repository';

@Injectable()
export class AnswerService {
  constructor(private readonly answerRepository: AnswerRepository) {}

  async create(data: CreateAnswerDto) {
    return await this.answerRepository.create(data);
  }

  async findAll(quizId: string) {
    return await this.answerRepository.findAll(quizId);
  }

  async findOne(quizId: string, answerId: string) {
    return await this.answerRepository.findOne(quizId, answerId);
  }
}
