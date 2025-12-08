import { IsDate, IsString } from "class-validator";
export class QuizDto {
	@IsString()
	id: string;

	@IsString()
	title: string;

	@IsDate()
	createdAt: Date;
}
