import { z } from "zod";
import { createTRPCRouter, publicProcedure,protectedProcedure } from "~/server/api/trpc";
import { User } from "@prisma/client";
//Recordar cambiar a adminProcedure mas adelante y agregar los inputs

export const adminRouter = createTRPCRouter({
    updateUserData: publicProcedure
    .input(z.object({name:z.string(),email:z.string(),age:z.string(),id:z.string(),role:z.string()}))
    .mutation(
        ({ctx,input})=>{
            return ctx.prisma.user.update({where:{id:input.id},data:{name:input.name,email:input.email,role:input.role}})
        }
    )
}) 