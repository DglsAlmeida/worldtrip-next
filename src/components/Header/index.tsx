import { Flex, Box, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex alignItems="center" justifyContent="center" height="100px">
      <Box boxSize="sm" display="flex" alignItems="center" justifyContent="center">
        <Image src="logo.png" alt="Logo Img" />
      </Box>
    </Flex>
  );
}
