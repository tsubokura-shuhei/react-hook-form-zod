import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { basicFormSchema, basicFormSchemaType } from ".";

export const useBasicFormTop = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<basicFormSchemaType>({
    resolver: zodResolver(basicFormSchema),
  });

  //送信データ
  const onSubmit = (data: basicFormSchemaType) => {
    console.log(data);
  };

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    errors,
  };
};
