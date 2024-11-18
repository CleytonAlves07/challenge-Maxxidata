-- CreateTable
CREATE TABLE "tipo_profissional" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "situacao" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tipo_profissional_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profissional" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "situacao" TEXT NOT NULL,
    "profissionalId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "profissional_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "profissional" ADD CONSTRAINT "profissional_profissionalId_fkey" FOREIGN KEY ("profissionalId") REFERENCES "tipo_profissional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
