import { Injectable } from "@nestjs/common";

import { QuizRepository } from "./quiz.repository";
import { CreateQuizDto } from "./dto/CreateQuiz.dto";

@Injectable()
export class QuizService {
	constructor(private readonly quizRepozitory: QuizRepository) {}

	async create(data: CreateQuizDto) {
		return await this.quizRepozitory.create(data);
	}

	async findAll() {
		return await this.quizRepozitory.findAll();
	}

	async findOne(id: string) {
		return await this.quizRepozitory.findOne(id);
	}

	async remove(id: string) {
		return await this.quizRepozitory.remove(id);
	}
}
