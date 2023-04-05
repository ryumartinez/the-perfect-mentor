import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { atom } from "jotai";
import { api } from "~/utils/api";

export const tokenAtom = atom("token");

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <div className="flex h-screen flex-col bg-[#BFD732]">
        <div className="m-auto">
          <div className="grid h-[361px] w-[315px] rounded-3xl border md:h-[479px] md:w-[886px] md:grid-cols-2 ">
            <div className="md:my-8 md:border-r-2"></div>

            <div className="right flex flex-col justify-evenly md:col-start-2 ">
              <div className="text-center flex flex-col gap-10">
                  <p className="w-[200px] text-5xl md:pl-36 ">
                    The perfect <span className="text-white">M</span>entor
                  </p>
                  <div className="flex flex-col justify-center items-center gap-5">
                    <Link href={"/login"} ><p className="w-[315px] h-[55px] border-2 border-black rounded-3xl
                    pt-2">Login</p></Link>
                    <Link href={"/register"}><p className="w-[315px] h-[55px] border-2 border-black rounded-3xl
                    pt-2">Register</p></Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
