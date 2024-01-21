import { Box, Flex } from "@radix-ui/themes";
import React from "react";
import SignUpForm from "../_components/SignUpForm";

const RegisterPage = () => {
  return (
    <Flex justify="center" align="center" className="min-h-[30rem]">
      <Flex
        wrap="wrap"
        justify="center"
        align="center"
        height="100%"
        className="w-screen overflow-hidden text-center"
      >
        <SignUpForm />
      </Flex>
    </Flex>
  );
};

export default RegisterPage;
