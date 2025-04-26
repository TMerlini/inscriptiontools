import React from 'react';
import { Box, Flex, Text, Badge, Stack, Heading } from '@chakra-ui/react';

function AppCard({ app }) {
  return (
    <Box 
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      transition="transform 0.2s"
      _hover={{ transform: 'translateY(-4px)', boxShadow: 'lg' }}
      bg="white"
      height="100%"
    >
      <Flex mb={2}>
        <Box 
          fontSize="3xl" 
          bg="blue.100" 
          p={2} 
          borderRadius="md" 
          width="48px" 
          height="48px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {app.icon}
        </Box>
        <Box ml={3}>
          <Heading size="md">{app.name}</Heading>
          <Badge colorScheme="blue">{app.category}</Badge>
        </Box>
      </Flex>
      
      <Text color="gray.600" fontSize="sm" mt={2}>
        {app.description}
      </Text>
      
      <Stack direction="row" mt={4} justify="space-between">
        <Text fontSize="sm">
          ⭐ {app.rating.toFixed(1)}
        </Text>
        <Text fontSize="sm">
          📥 {app.downloads.toLocaleString()}
        </Text>
      </Stack>
    </Box>
  );
}

export default AppCard; 