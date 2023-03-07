import { z } from "zod";
import { createTRPCRouter, publicProcedure,protectedProcedure } from "~/server/api/trpc";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { User } from "@prisma/client";


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
        const user = await ctx.prisma.user.findFirstOrThrow({where:{email:input.email}})
        if(user){
             const match = await bcrypt.compare(input.password,user?.password)
            if(match){
            const accessToken = jwt.sign({"email":user.email,"id":user.id,"role":user.role},"secreto")
            return(accessToken)
         }
        }
    }),
    profileData: protectedProcedure
    .query(async({ctx})=>{
        const user = await ctx.prisma.user.findFirstOrThrow({where:{email:ctx.user.email}})
        if(user){return user}

    }),
    updateProfileData: protectedProcedure
    .input(z.object({name:z.string(),email:z.string(),password:z.string(),age:z.string()}))
    .mutation(({input,ctx})=>{
        const userId = ctx.user.id
        return ctx.prisma.user.update({where:{id:userId},data:input})
    })
});
