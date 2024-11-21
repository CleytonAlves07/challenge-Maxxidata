/*
  Warnings:

  - You are about to drop the `tipo_profissional` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "profissional" DROP CONSTRAINT "profissional_profissionalId_fkey";

-- DropTable
DROP TABLE "tipo_profissional";

-- CreateTable
CREATE TABLE "tipoProfissional" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "situacao" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tipoProfissional_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "profissional" ADD CONSTRAINT "profissional_profissionalId_fkey" FOREIGN KEY ("profissionalId") REFERENCES "tipoProfissional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
