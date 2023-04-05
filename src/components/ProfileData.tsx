import React from "react";
import { User } from "@prisma/client";

type Props = {
  userdata: User;
};

export const ProfileData = ({ userdata }: Props) => {
  const [editMode, setEditMode] = React.useState(false);
  return (
    <>
      {editMode ? (
        <div className="fixed h-3/4 w-1/2 bg-green-300">
          <form></form>
          <button onClick={() => setEditMode(!editMode)}>cerrar</button>
        </div>
      ) : (
        <></>
      )}
      <div className="UserDataContainer | flex flex-col items-center justify-center gap-5">
        <div className="ProfilePicContainer |">
          <p>image</p>
        </div>
        
        <div className="EditContainer |">
          <button
            onClick={() => {
              setEditMode(!editMode);
            }}
          >
            edit
          </button>
        </div>

        <div className="NameContainer | w-[498px] border-b border-black">
          <p>name</p>
          <p className="h-6 font-bold"> {userdata.name || "---"}</p>
        </div>

        <div className="EmailContainer | w-[498px] border-b border-black">
          <p>email</p>
          <p className="h-6 font-bold">{userdata.email}</p>
        </div>

        <div className="AgeContainer | w-[498px] border-b border-black">
          <p>age</p>
          <p className="h-6 font-bold">{userdata.age || "---"}</p>
        </div>

        <div className="RoleContainer | w-[498px] border-b border-black">
          <p>role</p>
          <p className="h-6 font-bold"> {userdata.role}</p>
        </div>

      </div>
    </>
  );
};
