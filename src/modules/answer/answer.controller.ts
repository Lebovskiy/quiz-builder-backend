import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AnswerService } from './answer.service';
import { CreateAnswerDto } from './dto';

@Controller('answer')
@ApiTags('Answer')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Post()
  async create(@Body() data: CreateAnswerDto) {
    return await this.answerService.create(data);
  }

  @Get(':quizId')
  async findAll(@Param('quizId') quizId: string) {
    return await this.answerService.findAll(quizId);
  }

  @Get(':quizId/:answerId')
  async findOne(@Param('quizId') quizId: string, @Param('answerId') answerId: string) {
    return await this.answerService.findOne(quizId,answerId);
  }
}
