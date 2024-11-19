import { prisma } from '../db/prismaClient'



export const registerTipoProfissionalService = async ({ descricao, situacao }) => {
  
  const tipoProfissional = await prisma.tipo_Profissional.create({
    descricao,
    situacao,
  });

  return {success: true, tipo: tipoProfissional};
}