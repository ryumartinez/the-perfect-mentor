import React from "react";
import Head from "next/head";
import { AuthLayout } from "~/layout/AuthLayout";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { useForm, SubmitHandler } from "react-hook-form";
import { api } from "~/utils/api";

//tengo que buscar un tutorial de login con next para ver como hago la redireccion

type Inputs = {
  email: string;
  password: string;
};

const login = () => {
   
  const mutation = api.user.authUser.useMutation({
    onSuccess(accessToken){
      if(accessToken){window.localStorage.setItem("token",accessToken)}
      
  }});

  const {
    register,
    handleSubmit,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => mutation.mutate(data);
 

  return (
    <AuthLayout>
      <Head>
        <title>Login</title>
      </Head>
      <section className="flex h-full flex-col gap-10">
        <h1 className="text-2xl">Login</h1>
        <form
          className="mx-auto flex flex-col"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className=" flex flex-col gap-10">
           
            <div className="flex h-[55px] gap-2 items-center justify-center border border-solid border-black
            rounded-3xl
            ">
              <div className="ml-2 flex h-[32px] w-[32px]  items-center justify-center rounded-full bg-white">
                <AiOutlineMail />
              </div>
               {/** email input */}
              <input
                type="text"
                placeholder="email"
                className="bg-transparent outline-none"
                {...register("email")}
              />
            </div>
            <div className="rounded-3xl flex h-[55px] items-center justify-center gap-2 border border-solid border-black">
              <div className="ml-2 flex h-[32px] w-[32px] items-center justify-center rounded-full bg-white">
                <AiOutlineLock />
              </div>
               {/** password input */}
              <input
                type="text"
                placeholder="password"
                className="bg-transparent outline-none"
                {...register("password")}
              />
            </div>
          </div>
          <input type="submit" className="mt-40 md:mt-20 rounded-3xl flex h-[55px] items-center justify-center gap-2 border border-solid border-black" />
        </form>
      </section>
    </AuthLayout>
  );
};
export default login;
