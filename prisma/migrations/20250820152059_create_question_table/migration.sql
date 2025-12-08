-- CreateEnum
CREATE TYPE "public"."QuestionType" AS ENUM ('SINGLE', 'MULTIPLE', 'OPEN');

-- CreateTable
CREATE TABLE "public"."Question" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "quizId" TEXT NOT NULL,
    "type" "public"."QuestionType" NOT NULL,
    "options" TEXT[],

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Question" ADD CONSTRAINT "Question_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "public"."Quiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
