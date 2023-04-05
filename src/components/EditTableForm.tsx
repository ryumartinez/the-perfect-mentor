import React from "react";
import { api } from "~/utils/api";
import { useForm, SubmitHandler } from "react-hook-form";


type Inputs = {
  name: string;
  age: string;
  email: string;
  role: string;
  id: string;
};

const EditTableForm = ({ row }: any) => {
  const mutation = api.admin.updateUserData.useMutation();

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    data.id=row.values.id
    mutation.mutate(data);
}

  return (
    <div className="h-20 " key={row.id}>
      <form onSubmit={handleSubmit(onSubmit)}>
      
        <input type="text" {...register("age")} placeholder="age" />
        <input type="text" {...register("email")} placeholder="email" />
        <input type="text" {...register("role")} placeholder="role" />
        <input type="text" {...register("name")} placeholder="name" />
        <input type="submit"/>
      </form>
    </div>
  );
};

export default EditTableForm;
