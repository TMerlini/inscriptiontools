import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  Button, 
  VStack, 
  HStack, 
  Tabs, 
  TabList, 
  Tab, 
  TabPanels, 
  TabPanel,
  Flex,
  Image,
  useColorMode,
  IconButton,
  useToast,
  Center
} from '@chakra-ui/react';

// SVG logo component
const Logo = () => (
  <svg width="60" height="60" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="95" fill="#F9D276" />
    <ellipse cx="100" cy="100" rx="75" ry="80" fill="#E63946" />
    <ellipse cx="100" cy="100" rx="65" ry="70" fill="#F1FAEE" />
    <ellipse cx="75" cy="85" rx="15" ry="10" fill="#A8DADC" />
    <ellipse cx="125" cy="85" rx="15" ry="10" fill="#A8DADC" />
    <circle cx="75" cy="85" r="5" fill="#1D3557" />
    <circle cx="125" cy="85" r="5" fill="#1D3557" />
    <path d="M70,110 Q100,135 130,110" stroke="#1D3557" stroke-width="3" fill="none" />
    <line x1="70" y1="35" x2="85" y2="55" stroke="#1D3557" stroke-width="4" />
    <line x1="130" y1="35" x2="115" y2="55" stroke="#1D3557" stroke-width="4" />
    <circle cx="70" cy="35" r="5" fill="#F9D276" />
    <circle cx="130" cy="35" r="5" fill="#F9D276" />
  </svg>
);

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast();
  const [dragging, setDragging] = useState(false);

  const handleConnect = () => {
    toast({
      title: 'Connected',
      description: 'Successfully connected to Bitcoin node',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    
    // In a real app, you would handle the dropped files here
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      toast({
        title: 'File received',
        description: `Got file: ${files[0].name}`,
        status: 'info',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box minH="100vh" bg={colorMode === 'light' ? 'orange.50' : 'gray.800'}>
      {/* Header */}
      <Box bg={colorMode === 'light' ? 'white' : 'gray.900'} p={4} borderBottomWidth="1px">
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <HStack spacing={4}>
              <Logo />
              <Box>
                <Heading size="lg" color={colorMode === 'light' ? 'orange.800' : 'orange.200'}>ORDINARINOS</Heading>
                <Text fontSize="sm" color="gray.500">Upload, configure, and inscribe images to your Ordinals node</Text>
              </Box>
            </HStack>
            <IconButton
              aria-label="Toggle color mode"
              icon={colorMode === 'light' ? '🌙' : '☀️'}
              onClick={toggleColorMode}
              variant="ghost"
            />
          </Flex>
        </Container>
      </Box>

      <Container maxW="container.xl" py={8}>
        <VStack spacing={8} align="stretch">
          {/* Tool Sections */}
          <Box>
            <HStack mb={4}>
              <Logo width="36px" height="36px" />
              <Heading size="lg" color={colorMode === 'light' ? 'orange.800' : 'orange.200'}>Inscription Tools</Heading>
            </HStack>

            <Tabs variant="enclosed" colorScheme="orange" bg={colorMode === 'light' ? 'white' : 'gray.700'} borderRadius="md" boxShadow="md">
              <TabList p={2} bg={colorMode === 'light' ? 'orange.100' : 'gray.800'} borderTopRadius="md">
                <Tab>🖼️ Image</Tab>
                <Tab>📁 Batch Images</Tab>
                <Tab>📝 Text</Tab>
                <Tab>📋 Markdown</Tab>
                <Tab>🎨 Bitmap</Tab>
                <Tab>💰 BRC-20</Tab>
                <Tab>🔄 Recursive</Tab>
                <Tab>📛 SNS Names</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  {/* Image Upload Panel */}
                  <Box 
                    border="2px dashed" 
                    borderColor={dragging ? 'orange.500' : 'gray.300'} 
                    borderRadius="lg" 
                    p={10} 
                    textAlign="center"
                    bg={dragging ? (colorMode === 'light' ? 'orange.50' : 'gray.600') : 'transparent'}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    <Flex direction="column" align="center" justify="center">
                      <Box fontSize="4xl" mb={4}>⬆️</Box>
                      <Heading size="md" mb={2}>Drag and drop your file here</Heading>
                      <Text mb={4} color="gray.500">or click to browse files</Text>
                      <Text fontSize="sm" color="gray.500">Supports JPG, PNG, WEBP, GIF, GLTF formats</Text>
                      <Text fontSize="sm" color="gray.500">Max recommended size: 60KB</Text>
                    </Flex>
                  </Box>
                </TabPanel>
                
                <TabPanel>
                  <Center p={10}>
                    <Text>Batch image inscription tool will be available here</Text>
                  </Center>
                </TabPanel>
                
                <TabPanel>
                  <Center p={10}>
                    <Text>Text inscription tool will be available here</Text>
                  </Center>
                </TabPanel>
                
                <TabPanel>
                  <Center p={10}>
                    <Text>Markdown inscription tool will be available here</Text>
                  </Center>
                </TabPanel>
                
                <TabPanel>
                  <Center p={10}>
                    <Text>Bitmap inscription tool will be available here</Text>
                  </Center>
                </TabPanel>
                
                <TabPanel>
                  <Center p={10}>
                    <Text>BRC-20 inscription tool will be available here</Text>
                  </Center>
                </TabPanel>
                
                <TabPanel>
                  <Center p={10}>
                    <Text>Recursive inscription tool will be available here</Text>
                  </Center>
                </TabPanel>
                
                <TabPanel>
                  <Center p={10}>
                    <Text>SNS Names inscription tool will be available here</Text>
                  </Center>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>

          {/* Cache Management Section */}
          <Box>
            <HStack mb={4}>
              <Logo width="36px" height="36px" />
              <Heading size="lg" color={colorMode === 'light' ? 'orange.800' : 'orange.200'}>Cache Management</Heading>
            </HStack>
            
            <Box bg={colorMode === 'light' ? 'white' : 'gray.700'} p={6} borderRadius="md" boxShadow="md">
              <Text mb={4}>Manage your Ordinals node cache and configurations</Text>
              <HStack>
                <Button colorScheme="orange" isDisabled>Clear Cache</Button>
                <Button colorScheme="blue" onClick={handleConnect}>Connect to Node</Button>
              </HStack>
            </Box>
          </Box>
        </VStack>
      </Container>

      {/* Footer */}
      <Box textAlign="center" py={10} borderTopWidth="1px" mt={10}>
        <Text color="gray.500">
          Ordinarinos Inscription Manager v1.0.0 | Running on Umbrel OS
        </Text>
      </Box>
    </Box>
  );
}

export default App; 