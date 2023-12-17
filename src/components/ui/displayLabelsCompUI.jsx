import { Text, Flex } from "@chakra-ui/react";

export const DisplayLabelsCompUI = ({
  labels,
  bg,
  justify = "left",
  fontSize = 14,
}) => {
  return (
    <Flex wrap="wrap" justify={justify}>
      {labels.map((healthLabel, index) => (
        <Text
          fontSize={fontSize}
          bg={bg}
          key={index}
          borderRadius="md"
          padding="1"
          margin={1}
        >
          {healthLabel.toUpperCase()}{" "}
        </Text>
      ))}
    </Flex>
  );
};
