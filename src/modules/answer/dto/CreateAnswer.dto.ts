import { ApiProperty } from "@nestjs/swagger";
import { IsJSON, IsString } from "class-validator";

export class CreateAnswerDto {
	@ApiProperty()
	@IsJSON()
	content: string;

	@ApiProperty()
	@IsString()
	quizId: string;
}
