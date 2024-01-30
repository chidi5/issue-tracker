"use client";

import { Issue, Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const StatusSelect = ({ issue }: { issue: Issue }) => {
  const containers: {
    label: string;
    status: Status;
  }[] = [
    { label: "Open", status: "OPEN" },
    { label: "In-progress", status: "IN_PROGRESS" },
    { label: "Closed", status: "CLOSED" },
  ];

  const assignIssue = async (stats: string) => {
    try {
      await axios.patch("/api/issues/" + issue.id, {
        status: stats || null,
      });
      console.log(stats);
    } catch (error) {
      toast.error("Changes could not be saved");
    }
  };

  return (
    <>
      <Select.Root defaultValue={issue.status} onValueChange={assignIssue}>
        <Select.Trigger />
        <Select.Content>
          <Select.Group>
            <Select.Label>Status</Select.Label>
            {containers?.map((container) => (
              <Select.Item key={container.status} value={container.status}>
                {container.label}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
      <Toaster />
    </>
  );
};

export default StatusSelect;
