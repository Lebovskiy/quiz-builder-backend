import { Module } from "@nestjs/common";
import { QuizController } from "./quiz.controller";
import { QuizService } from "./quiz.service";
import { PrismaModule } from "src/prisma.module";
import { QuizRepository } from "./quiz.repository";

@Module({
	controllers: [QuizController],
	providers: [QuizService, QuizRepository],
	imports: [PrismaModule],
})
export class QuizModule {}
