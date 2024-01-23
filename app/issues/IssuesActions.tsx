import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const IssuesActions = () => {
  return (
    <div className="mb-5">
      <Link href="/issues/new">
        <Button>New Issues</Button>
      </Link>
    </div>
  );
};

export default IssuesActions;
