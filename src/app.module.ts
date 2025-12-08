import { Module } from "@nestjs/common";
import { QuizModule } from "./modules/quiz/quiz.module";
import { AnswerModule } from "./modules/answer/answer.module";

@Module({
	imports: [QuizModule, AnswerModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
