import { Module } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { AnswerController } from './answer.controller';
import { AnswerRepository } from './answer.repository';

@Module({
  imports: [],
  controllers: [AnswerController],
  providers: [AnswerService, AnswerRepository],
  exports: [],
})

export class AnswerModule {}
