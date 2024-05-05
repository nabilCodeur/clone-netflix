import { Authentification } from "@/providers/authentificationProvider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormLogin = () => {
  const InputsSchema = z.object({
    email: z.string().email(),
    password: z.string().min(2).max(30),
  });

  type Inputs = z.infer<typeof InputsSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(InputsSchema) });

  const {user , loginUser , errorMessage} = useContext(Authentification)


  const login = ({ email, password }:Inputs) => {
   
    loginUser(email,password)

  };


  return (
    <form
      className="flex flex-col space-y-4"
      onSubmit={handleSubmit(login)}
      role="form"
    >
      <input
        placeholder="Email"
        defaultValue={"test@test.fr"}
        {...register("email")}
        className="p-2 text-white border-2 border-gray-500 rounded-md bg-black/10"
      />
      {errors.email?.message && <p>{errors.email?.message}</p>}
      <input
        placeholder="password"
        defaultValue={"testtest"}
        type="password"
        {...register("password", {})}
        className="p-2 text-white border-2 border-gray-500 rounded-md bg-black/10"
      />
      {errors.password?.message && <p>{errors.password?.message}</p>}
      <input
        type="submit"
        className="p-2 bg-red-600 rounded-md "
        value={"Sign In"}
      />
      {errorMessage && <p>{errorMessage}</p>}
      {user?.email && <p>unknow user</p>}
    </form>
  );
};

export default FormLogin;
