import React from 'react';
import { Box, Flex, Heading, Spacer, Button, useColorMode } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg="blue.600" px={4} py={3} color="white">
      <Flex alignItems="center">
        <Heading size="md">
          <Link to="/">Community Store</Link>
        </Heading>
        <Spacer />
        <Button size="sm" onClick={toggleColorMode} variant="outline" mr={3}>
          {colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}
        </Button>
        <Button size="sm" variant="outline">
          Settings
        </Button>
      </Flex>
    </Box>
  );
}

export default Header; 