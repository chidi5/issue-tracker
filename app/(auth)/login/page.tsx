import { Flex } from "@radix-ui/themes";
import dynamic from "next/dynamic";
import React from "react";

const SignInForm = dynamic(
  () => import("@/app/(auth)/_components/SignInForm"),
  {
    ssr: false,
  }
);

const LoginPage = () => {
  return (
    <Flex justify="center" align="center" className="min-h-[30rem]">
      <Flex
        wrap="wrap"
        justify="center"
        align="center"
        height="100%"
        className="w-screen overflow-hidden text-center"
      >
        <SignInForm />
      </Flex>
    </Flex>
  );
};

export default LoginPage;
