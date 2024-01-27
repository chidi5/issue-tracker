import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import IssueStatusFilter from "./IssueStatusFilter";

const IssuesActions = () => {
  return (
    <Flex justify="between">
      <IssueStatusFilter />
      <Link href="/issues/new">
        <Button>New Issues</Button>
      </Link>
    </Flex>
  );
};

export default IssuesActions;
