import React from "react";
import {
  Container,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
} from "@chakra-ui/react";
import { useBasicFormTop } from "../UseForm";

const Form = () => {
  const { register, onSubmit, errors } = useBasicFormTop();

  return (
    <Container>
      <Heading as={"h2"} mb={8}>
        基本的なフォーム
      </Heading>
      <form onSubmit={onSubmit}>
        {/* 名前 */}
        <FormControl isInvalid={!!errors.name}>
          <FormLabel htmlFor={"name"}>名前</FormLabel>
          <Input type={"text"} id={"name"} {...register("name")} />
          <FormErrorMessage style={{ color: "red" }}>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>

        {/* 年齢 */}
        <FormControl mt={8}>
          <FormLabel htmlFor={"age"}>年齢</FormLabel>
          <Input type={"text"} id={"age"} {...register("age")} />
        </FormControl>

        <FormControl isInvalid={!!errors.password} mt={8}>
          <FormLabel htmlFor={"password"}>パスワード</FormLabel>
          <Input type={"password"} id={"password"} {...register("password")} />
          <FormErrorMessage style={{ color: "red" }}>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>

        <Button type={"submit"} mt={8}>
          送信
        </Button>
      </form>
    </Container>
  );
};

export default Form;
