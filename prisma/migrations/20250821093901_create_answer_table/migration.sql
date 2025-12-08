-- CreateTable
CREATE TABLE "public"."Answer" (
    "id" TEXT NOT NULL,
    "content" JSONB NOT NULL,
    "quizId" TEXT NOT NULL,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Answer" ADD CONSTRAINT "Answer_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "public"."Quiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
