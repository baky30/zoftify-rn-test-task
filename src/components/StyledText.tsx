import React, { ReactNode } from "react";
import { Text } from "react-native";

interface IStyledText {
  style: string;
  children: ReactNode | string;
  numberOfLines?: number;
  color?: string;
}

const StyledText: React.FC<IStyledText> = ({
  style,
  children,
  numberOfLines,
  color,
}) => {
  return (
    <Text
      style={{ color }}
      className={`${style} font-lato`}
      numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};

export default StyledText;
