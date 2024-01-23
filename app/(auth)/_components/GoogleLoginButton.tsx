import { Button } from "@radix-ui/themes";
import React, { MouseEventHandler, ReactNode } from "react";

interface Props {
  onClick: MouseEventHandler;
  children: ReactNode;
}

const GoogleLoginButton = ({ onClick, children }: Props) => {
  return (
    <Button
      size="3"
      variant="solid"
      onClick={onClick}
      className="w-full"
      highContrast
    >
      {children}
    </Button>
  );
};

export default GoogleLoginButton;
