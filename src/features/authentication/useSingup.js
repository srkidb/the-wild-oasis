import { useMutation } from "@tanstack/react-query";
import { singup as signupApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success(
        "Account successfully created! Please verufy the new account from the user's email address."
      );
    },
    onError: (err) => {
      console.error("ERROR: " + err.message);
      toast.error("An error occurred while creating your account");
    },
  });

  return { signup, isLoading };
}
