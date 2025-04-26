import React from 'react';
import { Box, Container, Heading, Text, Button, VStack, HStack, SimpleGrid, Divider, useToast } from '@chakra-ui/react';

function App() {
  const toast = useToast();

  const handleConnect = () => {
    toast({
      title: 'Connected',
      description: 'Successfully connected to Bitcoin node',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box minH="100vh" bg="gray.50" py={10}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          {/* Header */}
          <Box bg="blue.600" p={6} color="white" borderRadius="lg" boxShadow="md">
            <Heading size="xl">Inscription Manager</Heading>
            <Text mt={2}>Manage your Bitcoin inscriptions with ease</Text>
          </Box>

          {/* Status Panel */}
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            <Box bg="white" p={5} borderRadius="md" boxShadow="sm">
              <Heading size="md" mb={3}>Bitcoin Node</Heading>
              <Text color="gray.500" mb={4}>Check your node connection status</Text>
              <Button colorScheme="blue" onClick={handleConnect}>
                Connect
              </Button>
            </Box>

            <Box bg="white" p={5} borderRadius="md" boxShadow="sm">
              <Heading size="md" mb={3}>Ord Server</Heading>
              <Text color="gray.500" mb={4}>Ord server: Not running</Text>
              <Button colorScheme="blue" isDisabled>
                Start Server
              </Button>
            </Box>

            <Box bg="white" p={5} borderRadius="md" boxShadow="sm">
              <Heading size="md" mb={3}>Wallet</Heading>
              <Text color="gray.500" mb={4}>Wallet status: Not loaded</Text>
              <Button colorScheme="blue" isDisabled>
                Load Wallet
              </Button>
            </Box>
          </SimpleGrid>

          <Divider />

          {/* Actions */}
          <Box>
            <Heading size="md" mb={5}>Quick Actions</Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
              <Box bg="white" p={5} borderRadius="md" boxShadow="sm">
                <Heading size="sm" mb={3}>Create Inscription</Heading>
                <Text color="gray.500" fontSize="sm" mb={4}>
                  Create a new inscription on the Bitcoin blockchain
                </Text>
                <Button size="sm" isDisabled width="full">Create</Button>
              </Box>

              <Box bg="white" p={5} borderRadius="md" boxShadow="sm">
                <Heading size="sm" mb={3}>View Inscriptions</Heading>
                <Text color="gray.500" fontSize="sm" mb={4}>
                  Browse your existing inscriptions
                </Text>
                <Button size="sm" isDisabled width="full">View</Button>
              </Box>

              <Box bg="white" p={5} borderRadius="md" boxShadow="sm">
                <Heading size="sm" mb={3}>Send Inscription</Heading>
                <Text color="gray.500" fontSize="sm" mb={4}>
                  Transfer an inscription to another address
                </Text>
                <Button size="sm" isDisabled width="full">Send</Button>
              </Box>

              <Box bg="white" p={5} borderRadius="md" boxShadow="sm">
                <Heading size="sm" mb={3}>Backup Wallet</Heading>
                <Text color="gray.500" fontSize="sm" mb={4}>
                  Create a backup of your wallet
                </Text>
                <Button size="sm" isDisabled width="full">Backup</Button>
              </Box>
            </SimpleGrid>
          </Box>

          {/* Footer */}
          <Box textAlign="center" pt={10}>
            <Text color="gray.500">
              Inscription Manager v1.0.0 | Running on Umbrel OS
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

export default App; 