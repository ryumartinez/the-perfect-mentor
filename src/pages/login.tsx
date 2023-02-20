import React from "react";
import Head from "next/head";
import { AuthLayout } from "~/layout/AuthLayout";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { useForm, SubmitHandler } from "react-hook-form";
import { api } from "~/utils/api";
import { useAtom } from "jotai/react";
import { tokenAtom } from ".";

type Inputs = {
  email: string;
  password: string;
};

const login = () => {
   const [token,setToken] = useAtom(tokenAtom) 
   console.log(token)
  const mutation = api.user.authUser.useMutation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => mutation.mutate(data);
  if(mutation.isSuccess&&mutation.data){setToken(mutation.data)}

  return (
    <AuthLayout>
      <Head>
        <title>Login</title>
      </Head>
      <section className="flex h-full flex-col gap-10">
        <h1>Login</h1>
        <form
          className="mx-auto flex flex-col"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mt-10 flex flex-col gap-10">
           
            <div className="flex h-[55px] items-center justify-center gap-2 border border-solid border-black">
              <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-white">
                <AiOutlineMail />
              </div>
               {/** email input */}
              <input
                type="text"
                placeholder="email"
                className=""
                {...register("email")}
              />
            </div>
            <div className="flex h-[55px] items-center justify-center gap-2 border border-solid border-black">
              <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-white">
                <AiOutlineLock />
              </div>
               {/** password input */}
              <input
                type="text"
                placeholder="password"
                className=""
                {...register("password")}
              />
            </div>
          </div>
          <input type="submit" className="mt-40" />
        </form>
      </section>
    </AuthLayout>
  );
};
export default login;
