import React from "react";
import StyledText from "./StyledText";
import { TStatus } from "../commonInterfaces";

const Status: React.FC<{ type: TStatus }> = ({ type }) => {
  const statusColor =
    type === "draft" ? "bg-red-light text-red" : "bg-green-light text-green";
  return (
    <StyledText
      style={`px-3 py-2 text-sm rounded-lg capitalize ${statusColor}`}>
      {type}
    </StyledText>
  );
};

export default Status;
