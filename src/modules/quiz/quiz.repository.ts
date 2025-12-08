import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";
import { CreateQuizDto } from "./dto/CreateQuiz.dto";

@Injectable()
export class QuizRepository {
	constructor(private prisma: PrismaService) {}

	async create(data: CreateQuizDto) {
		const { questions, ...rest } = data;

		const quiz = await this.prisma.quiz.create({
			data: rest,
		});

		if (questions?.length) {
			await this.prisma.question.createMany({
				data: questions.map(item => ({
					...item,
					quizId: quiz.id,
				})),
			});
		}

		return quiz;
	}

	async findAll() {
		return this.prisma.quiz.findMany({ include: { questions: true } });
	}

	async findOne(id: string) {
		return this.prisma.quiz.findUniqueOrThrow({
			where: { id },
			include: { questions: true },
		});
	}

	async remove(id: string) {
		return await this.prisma.$transaction(async tx => {
			await tx.answer.deleteMany({
				where: { quizId: id },
			});

			await tx.question.deleteMany({
				where: { quizId: id },
			});

			await tx.quiz.delete({
				where: { id },
			});
		});
	}
}
