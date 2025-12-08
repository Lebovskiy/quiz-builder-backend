import { ApiPropertyOptional, ApiProperty } from "@nestjs/swagger";
import { IsArray, IsString, ValidateNested } from "class-validator";
import { CreateQuestionDto } from "./CreateQuestion.dto";
import { Type } from "class-transformer";

export class CreateQuizDto {
	@ApiProperty()
	@IsString()
	title: string;

	@ApiPropertyOptional({ type: () => [CreateQuestionDto] })
	@IsArray()
	@ValidateNested({ each: true })
	@Type(() => CreateQuestionDto)
	questions?: CreateQuestionDto[];
}
