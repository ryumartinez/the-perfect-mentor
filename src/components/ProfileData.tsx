import React from "react";
import { User } from "@prisma/client";

type Props = {
    userdata : User
}

export const ProfileData = ({userdata}: Props) => {
  const [editMode,setEditMode] = React.useState(false)
  return (
    <>
    {editMode ? 
    <div className="w-1/2 h-3/4 bg-green-300 fixed">
      <form ></form>
      <button onClick={()=>setEditMode(!editMode)}>cerrar</button>
    </div>
    : <></>}
    <div className="flex flex-col gap-5 justify-center items-center"> 
      <div className=""><p>image</p></div>
      <div className=""><button onClick={()=>{setEditMode(!editMode)}}>edit</button></div>
      
      <div className="w-[498px] border-b border-black">
        <p>name</p>
      <p className="font-bold h-6"> {userdata.name || "---"}</p>
      </div>
      <div className="w-[498px] border-b border-black">
        <p>email</p>
        <p className="font-bold h-6">{userdata.email}</p>
      </div>
      <div className="w-[498px] border-b border-black">
        <p>age</p>
        <p className="font-bold h-6">{userdata.age || "---"}</p>
        
      </div>
      <div className="w-[498px] border-b border-black">
        <p>role</p>
        <p className="font-bold h-6"> {userdata.role}</p>
       
      </div>
    </div>
    </>
  );
};
