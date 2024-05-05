import useAuthentification from "@/hooks/useAuthentification";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSignup = () => {
  const InputsSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(30),
  });

  type Inputs = z.infer<typeof InputsSchema>;
  const { register, handleSubmit , formState:{errors} } = useForm<Inputs>({
    resolver: zodResolver(InputsSchema),
  });
  const authentification = useAuthentification()


  const signupUser = ({ email, password }: Inputs) => {
    authentification.signUpUser(email,password)
   
  };

  return (
    <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit(signupUser)}>
      <input {...register("email")} placeholder="email" className="p-4 border-2 border-gray-400"/>
      {errors.email?.message && <p>{errors.email.message}</p>}

      <input {...register("password")} placeholder="Enter your password" className="p-4 border-2 border-gray-400"/>
      {errors.password?.message && <p>{errors.password.message}</p>}
      {authentification.errorMessage && <p>{authentification.errorMessage}</p>}
      <input type="submit" className="p-3 text-white bg-red-700 rounded-sm" value={"S'inscrire"} />
    </form>
  );
};

export default FormSignup;
