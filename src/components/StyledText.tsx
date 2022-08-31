import React, { ReactNode } from "react";
import { Text } from "react-native";

interface IStyledText {
  style: string;
  children: ReactNode | string;
  numberOfLines?: number;
}

const StyledText: React.FC<IStyledText> = ({
  style,
  children,
  numberOfLines,
}) => {
  return (
    <Text className={`${style} font-lato`} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};

export default StyledText;
