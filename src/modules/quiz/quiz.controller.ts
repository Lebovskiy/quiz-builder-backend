import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateQuizDto } from "./dto/CreateQuiz.dto";
import { QuizService } from "./quiz.service";

@ApiTags("quiz")
@Controller("quiz")
export class QuizController {
	constructor(private readonly quizService: QuizService) {}

	@Post()
	async createQuiz(@Body() data: CreateQuizDto) {
		return await this.quizService.create(data);
	}

	@Get("findAll")
	async findAll() {
		return await this.quizService.findAll();
	}

	@Get(":id")
	async findOne(@Param("id") id: string) {
		return await this.quizService.findOne(id);
	}

	@Delete(":id/remove")
	async remove(@Param("id") id: string) {
		return await this.quizService.remove(id);
	}
}
