import React from 'react';
import { Box, VStack, Button, Icon, Text } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();

  const navItems = [
    { name: 'Browse Apps', path: '/', icon: '🏠' },
    { name: 'Installed Apps', path: '/installed', icon: '📦' },
    { name: 'Categories', path: '/categories', icon: '🔖' },
    { name: 'Updates', path: '/updates', icon: '🔄' },
  ];

  return (
    <Box
      w="240px"
      h="calc(100vh - 60px)"
      bg="white"
      p={4}
      borderRight="1px"
      borderColor="gray.200"
    >
      <VStack spacing={3} align="stretch">
        {navItems.map((item) => (
          <Link to={item.path} key={item.path}>
            <Button
              w="100%"
              justifyContent="flex-start"
              variant={location.pathname === item.path ? 'solid' : 'ghost'}
              colorScheme={location.pathname === item.path ? 'blue' : 'gray'}
              leftIcon={<Text fontSize="lg">{item.icon}</Text>}
            >
              {item.name}
            </Button>
          </Link>
        ))}
      </VStack>
    </Box>
  );
}

export default Sidebar; 