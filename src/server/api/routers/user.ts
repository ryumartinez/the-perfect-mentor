import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


export const userRouter = createTRPCRouter({
    newUser: publicProcedure
    .input(z.object({email:z.string(),password:z.string()}))
    .mutation(async ({input,ctx})=>{
        const hashedPassword = await bcrypt.hash(input.password,10)
        const userData = {email:input.email,password:hashedPassword}
        return(
            ctx.prisma.user.create({data:userData})
            )
    }),
    authUser: publicProcedure
    .input(z.object({email:z.string(),password:z.string()}))
    .mutation(async({input,ctx})=>{
        const user = await ctx.prisma.user.findFirst({where:{email:input.email}})
        if(user){
             const match = await bcrypt.compare(input.password,user?.password)
            if(match){
            const accessToken = jwt.sign({"email":user.email},"secreto")
            return(accessToken)
         }
        }
       
       
    })
});
