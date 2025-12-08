import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { QuestionType } from "@prisma/client";
import { IsArray, IsEnum, IsString } from "class-validator";

export class CreateQuestionDto {
	@ApiProperty()
	@IsString()
	text: string;

	@ApiProperty({ enum: QuestionType })
	@IsEnum(QuestionType)
	type: QuestionType;

	@ApiPropertyOptional()
	@IsArray()
	@IsString({ each: true })
	options?: string[];
}
